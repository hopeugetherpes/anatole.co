import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import test from "node:test";

const require = createRequire(import.meta.url);
const fromEslint = createRequire(require.resolve("eslint"));
const minimatch = fromEslint("minimatch");
const modulePath = fromEslint.resolve("minimatch");

test("ESLint retains the callable matcher and helper APIs", () => {
  assert(minimatch("app/page.tsx", "**/*.tsx"));
  assert(!minimatch("app/page.js", "**/*.tsx"));
  assert(new minimatch.Minimatch("**/*.tsx").match("app/page.tsx"));
  assert(minimatch.defaults({ dot: true })(".config.js", "*.js"));
  assert.deepEqual(minimatch.match(["a.js", "b.ts"], "*.ts"), ["b.ts"]);
});

test("native ESM consumers can import named exports", async () => {
  const imported = await import(pathToFileURL(modulePath).href);
  assert.equal(imported.minimatch, minimatch);
  assert.equal(imported.Minimatch, minimatch.Minimatch);
  assert.deepEqual(imported.braceExpand("a.{js,ts}"), ["a.js", "a.ts"]);
});

test("the actual import restriction rule still rejects forbidden paths", () => {
  const { Linter } = require("eslint");
  const importPlugin = require("eslint-plugin-import");
  const config = [{
    languageOptions: { ecmaVersion: 2022, sourceType: "module" },
    plugins: { import: importPlugin },
    rules: { "import/no-internal-modules": ["error", { forbid: ["**/internal/**"] }] },
  }];
  const linter = new Linter();
  const blocked = linter.verify("import value from './internal/private.js';", config);
  assert.equal(blocked.length, 1);
  assert.equal(blocked[0].ruleId, "import/no-internal-modules");
  assert.deepEqual(linter.verify("import value from './public/index.js';", config), []);
});

test("hostile glob preprocessing is bounded", () => {
  const source = `
    const { Minimatch } = require(process.argv[1]);
    for (const depth of [16, 32, 64]) {
      try { new Minimatch('**/../'.repeat(depth) + '*.ts', { optimizationLevel: 2 }); }
      catch (error) { if (!(error instanceof RangeError)) throw error; }
    }
  `;
  const child = spawnSync(process.execPath, ["-e", source, modulePath], { timeout: 5000, encoding: "utf8" });
  assert.ifError(child.error);
  assert.equal(child.status, 0, child.stderr);
});
