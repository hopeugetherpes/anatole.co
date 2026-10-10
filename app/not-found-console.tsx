"use client"

import { useEffect, useState } from "react"

const trace = [
  ["0001", "LOAD /REQUEST"],
  ["0002", "RUN /ROUTER"],
  ["0003", "LOOKUP /RESOURCE"],
  ["0004", "EXIT"],
] as const

export default function NotFoundConsole() {
  const [requestedPath, setRequestedPath] = useState("UNKNOWN_RESOURCE")

  useEffect(() => {
    setRequestedPath(window.location.pathname)

    const reboot = (event: KeyboardEvent) => {
      if (event.key === "Enter") window.location.assign("/")
    }

    window.addEventListener("keydown", reboot)
    return () => window.removeEventListener("keydown", reboot)
  }, [])

  return (
    <main className="artifact404-shell">
      <header className="artifact404-header">
        <a className="artifact404-brand" href="/" aria-label="Return to anatole.co">
          :/ ANATOLE.CO
        </a>

        <nav className="artifact404-nav" aria-label="Error page navigation">
          <a href="/">HOME</a>
          <a href="https://github.com/hopeugetherpes">PROJECTS</a>
          <a href="https://enclave.anatole.co">ENCLAVE</a>
          <a href="mailto:anatole@anatole.co">ANATOLE@ANATOLE.CO</a>
        </nav>

        <p>PERSONAL WEBSPACE · PARIS, FRANCE</p>
      </header>

      <section className="artifact404-grid" aria-labelledby="artifact404-title">
        <div className="artifact404-column">
          <div className="artifact404-block">
            <p>SYSTEM: ANATOLE.CO_404_HANDLER</p>
            <p>RUNNING ERROR ROUTINE...</p>
            <p>&gt;&gt;&gt; PAGE_NOT_FOUND_EXCEPTION</p>
          </div>

          <div className="artifact404-block">
            <p>REQUESTED RESOURCE:</p>
            <p className="artifact404-path">{requestedPath}</p>
            <p>STATUS: NULL_POINTER_REFERENCE</p>
            <p>RETURN CODE: 404</p>
          </div>

          <div className="artifact404-block">
            <p>SYSTEM TRACE:</p>
            {trace.map(([number, label]) => (
              <p key={number}>
                {number} — {label}
              </p>
            ))}
          </div>

          <div className="artifact404-block artifact404-ascii" aria-hidden="true">
            <p>╔════════════════════════════╗</p>
            <p>║ ROUTE STATE: UNDEFINED&nbsp;&nbsp; ║</p>
            <p>║ SECRET STATE: UNEXPOSED&nbsp;&nbsp;║</p>
            <p>╚════════════════════════════╝</p>
          </div>
        </div>

        <div className="artifact404-column">
          <div className="artifact404-block">
            <p>&gt; RUNNING RECOVERY ROUTINE</p>
            <p>&gt; CHECKING KNOWN ROUTES...</p>
            <p>&gt; NO MATCH FOUND</p>
            <p>&gt; HOME ROUTE AVAILABLE</p>
          </div>

          <div className="artifact404-block">
            <p>LIKELY REASONS:</p>
            <p>01 — THE ADDRESS WAS MISTYPED.</p>
            <p>02 — THE PAGE MOVED OR NEVER EXISTED.</p>
            <p>03 — A BOT IS LOOKING FOR SECRETS.</p>
            <p>04 — THE INTERNET TOOK A WRONG TURN.</p>
          </div>

          <div className="artifact404-block">
            <p>IF LOST == TRUE THEN</p>
            <p>&nbsp;&nbsp;PRINT &quot;NOT EVERYTHING MISSING NEEDS TO BE FOUND.&quot;</p>
            <p>END IF</p>
          </div>

          <div className="artifact404-block">
            <p>[RECOVERY OPTIONS]</p>
            <p>ENTER&nbsp;&nbsp;&nbsp;&nbsp;RETURN TO HOME</p>
            <p>ESC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCEPT THE VOID</p>
          </div>
        </div>

        <div className="artifact404-column">
          <div className="artifact404-block">
            <p>NOTE_01: NOT ALL REQUESTS DESERVE A RESPONSE.</p>
            <p>NOTE_02: ABSENCE CAN BE A PRIVACY FEATURE.</p>
            <p>NOTE_03: THE SERVER HAS NOTHING TO CONFESS.</p>
            <p>NOTE_04: THIS DEAD END IS INTENTIONAL.</p>
          </div>

          <div className="artifact404-block">
            <p>&gt; RUNNING SELF-DIAGNOSIS</p>
            <p>&gt; ROUTER INTEGRITY: OK</p>
            <p>&gt; .ENV FILE: NOT PUBLIC</p>
            <p>&gt; WP-ADMIN: DOES NOT EXIST</p>
            <p>&gt; CONTENT LEAKAGE: NONE</p>
          </div>

          <div className="artifact404-block">
            <p>[MEMORY DUMP /DEV/ANATOLE/404]</p>
            <p>0001 THE WEB REMEMBERS EVERY REQUEST.</p>
            <p>0002 THIS SITE REMEMBERS ONLY WHAT IT NEEDS.</p>
            <p>0003 THE REST RETURNS TO SILENCE.</p>
          </div>

          <div className="artifact404-block">
            <p>OPEN SOURCE / PRIVACY FIRST</p>
            <p>END OF SECTOR 404</p>
          </div>
        </div>
      </section>

      <section className="artifact404-ending">
        <p>ANATOLE.CO // ROUTER SELF-DIAGNOSIS</p>
        <p>THE REQUESTED COORDINATE IS OUTSIDE THE KNOWN SYSTEM.</p>
        <h1 id="artifact404-title" className="artifact404-code" data-text="ERROR 404">
          ERROR 404
        </h1>
        <p className="artifact404-message">PAGE NOT FOUND</p>
        <a className="artifact404-reboot" href="/">
          PRESS ENTER TO REBOOT ↵
        </a>
      </section>
    </main>
  )
}
