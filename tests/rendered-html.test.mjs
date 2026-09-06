import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";

test("production homepage and local resources are served", { timeout: 30_000 }, async (t) => {
  const reservation = createServer();
  reservation.listen(0, "127.0.0.1");
  await once(reservation, "listening");
  const { port } = reservation.address();
  await new Promise((resolve, reject) => reservation.close((error) => error ? reject(error) : resolve()));

  const root = fileURLToPath(new URL("../", import.meta.url));
  const next = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
  const server = spawn(process.execPath, [next, "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });
  let logs = "";
  let startError;
  server.stdout.on("data", (chunk) => { logs += chunk; });
  server.stderr.on("data", (chunk) => { logs += chunk; });
  server.on("error", (error) => { startError = error; });

  t.after(async () => {
    if (server.exitCode !== null || startError) return;
    const closed = once(server, "close");
    server.kill("SIGTERM");
    const killTimer = setTimeout(() => server.kill("SIGKILL"), 5_000);
    killTimer.unref();
    await closed;
    clearTimeout(killTimer);
  });

  const origin = `http://127.0.0.1:${port}`;
  let response;
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    if (startError) throw startError;
    assert.equal(server.exitCode, null, `Next.js exited before becoming ready:\n${logs}`);
    try {
      response = await fetch(origin, { signal: AbortSignal.timeout(2_000) });
      break;
    } catch {
      await delay(100);
    }
  }

  assert.ok(response, `Next.js did not become ready:\n${logs}`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Anatole/);
  assert.match(html, /Hello, new friend/);
  assert.match(html, /href="https:\/\/otr\.anatole\.co"/);

  const resources = new Set(["/anatole-profile.png", "/favicon.svg"]);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const path = match[1].replaceAll("&amp;", "&");
    if (path.startsWith("/_next/")) resources.add(path);
  }
  assert.ok([...resources].some((path) => path.startsWith("/_next/static/")), "Homepage must include its compiled assets");

  for (const path of resources) {
    const asset = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(5_000) });
    assert.equal(asset.status, 200, `Resource failed: ${path}`);
    assert.ok((await asset.arrayBuffer()).byteLength > 0, `Resource is empty: ${path}`);
  }
});
