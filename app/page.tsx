"use client"

import Image from "next/image"
import { Lock } from "lucide-react"
import { useEffect, useRef } from "react"

const brandIconPaths = {
  instagram:
    "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  signal:
    "M12 0q-.934 0-1.83.139l.17 1.111a11 11 0 0 1 3.32 0l.172-1.111A12 12 0 0 0 12 0M9.152.34A12 12 0 0 0 5.77 1.742l.584.961a10.8 10.8 0 0 1 3.066-1.27zm5.696 0-.268 1.094a10.8 10.8 0 0 1 3.066 1.27l.584-.962A12 12 0 0 0 14.848.34M12 2.25a9.75 9.75 0 0 0-8.539 14.459c.074.134.1.292.064.441l-1.013 4.338 4.338-1.013a.62.62 0 0 1 .441.064A9.7 9.7 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-7.092.068a12 12 0 0 0-2.59 2.59l.909.664a11 11 0 0 1 2.345-2.345zm14.184 0-.664.909a11 11 0 0 1 2.345 2.345l.909-.664a12 12 0 0 0-2.59-2.59M1.742 5.77A12 12 0 0 0 .34 9.152l1.094.268a10.8 10.8 0 0 1 1.269-3.066zm20.516 0-.961.584a10.8 10.8 0 0 1 1.27 3.066l1.093-.268a12 12 0 0 0-1.402-3.383M.138 10.168A12 12 0 0 0 0 12q0 .934.139 1.83l1.111-.17A11 11 0 0 1 1.125 12q0-.848.125-1.66zm23.723.002-1.111.17q.125.812.125 1.66c0 .848-.042 1.12-.125 1.66l1.111.172a12.1 12.1 0 0 0 0-3.662M1.434 14.58l-1.094.268a12 12 0 0 0 .96 2.591l-.265 1.14 1.096.255.36-1.539-.188-.365a10.8 10.8 0 0 1-.87-2.35m21.133 0a10.8 10.8 0 0 1-1.27 3.067l.962.584a12 12 0 0 0 1.402-3.383zm-1.793 3.848a11 11 0 0 1-2.345 2.345l.664.909a12 12 0 0 0 2.59-2.59zm-19.959 1.1L.357 21.48a1.8 1.8 0 0 0 2.162 2.161l1.954-.455-.256-1.095-1.953.455a.675.675 0 0 1-.81-.81l.454-1.954zm16.832 1.769a10.8 10.8 0 0 1-3.066 1.27l.268 1.093a12 12 0 0 0 3.382-1.402zm-10.94.213-1.54.36.256 1.095 1.139-.266c.814.415 1.683.74 2.591.961l.268-1.094a10.8 10.8 0 0 1-2.35-.869zm3.634 1.24-.172 1.111a12.1 12.1 0 0 0 3.662 0l-.17-1.111q-.812.125-1.66.125a11 11 0 0 1-1.66-.125",
  mastodon:
    "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z",
} as const

function BrandIcon({ path }: { path: string }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 flex-none"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  )
}

const otrIconDataUri = "data:image/png;base64,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"

function OffTheRecordIcon() {
  return (
    <span aria-hidden="true" className="relative h-5 w-5 flex-none">
      <img
        src={otrIconDataUri}
        alt=""
        width={28}
        height={28}
        className="absolute left-1/2 top-1/2 h-7 w-7 max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  )
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const handleFirstInteraction = () => {
            audio.play().catch(() => {})
            document.removeEventListener("click", handleFirstInteraction)
            document.removeEventListener("keydown", handleFirstInteraction)
            document.removeEventListener("touchstart", handleFirstInteraction)
          }

          document.addEventListener("click", handleFirstInteraction)
          document.addEventListener("keydown", handleFirstInteraction)
          document.addEventListener("touchstart", handleFirstInteraction)
        })
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-16">
      <audio ref={audioRef} autoPlay loop preload="auto" style={{ display: "none" }}>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/everything-XxsM3tDBS4qDraptblVilRNbDHSxDd.mp3" type="audio/mpeg" />
      </audio>

      <a rel="me" href="https://mastodon.social/@hopeugetherpes" style={{ display: "none" }}>
        Mastodon
      </a>

      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-8 bg-gray-200">
            <Image
              src="/anatole-profile.png"
              alt="Anatole's profile photo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 font-archivo text-3xl md:text-4xl leading-relaxed" style={{ color: "#706E70" }}>
            <p>Hello, new friend, my name is Anatole</p>
            <p>
              It&apos;s nice to meet you,{" "}
              <a
                href="mailto:anatole@anatole.co"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                please do introduce yourself
              </a>{" "}
              – you don&apos;t really need a reason or occasion.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <a
            href="https://instagram.anatole.co/"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#FCE1E1",
              color: "#D66565",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FCEDED")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCE1E1")}
          >
            <BrandIcon path={brandIconPaths.instagram} />
            <span className="font-medium">Instagram</span>
          </a>

          <a
            href="https://signal.anatole.co/"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#E3F0FA",
              color: "#538FBD",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F0F7FC")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E3F0FA")}
          >
            <BrandIcon path={brandIconPaths.signal} />
            <span className="font-medium">Signal</span>
          </a>

          <a
            href="https://github.com/hopeugetherpes?tab=repositories"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#E0F2DC",
              color: "#65A856",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#EDF7EB")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E0F2DC")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#65A856"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span className="font-medium">Projects</span>
          </a>

          <a
            href="https://mastodon.social/@hopeugetherpes"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#EDDEFC",
              color: "#A276CF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F5EDFC")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDEFC")}
          >
            <BrandIcon path={brandIconPaths.mastodon} />
            <span className="font-medium">Mastodon</span>
          </a>

          <a
            href="https://enclave.anatole.co"
            className="flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
          >
            <Lock size={20} />
            <span className="font-medium">Enclave</span>
          </a>

          <a
            href="https://otr.anatole.co"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#FFF1C7",
              color: "#9A6500",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF7E2")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFF1C7")}
          >
            <OffTheRecordIcon />
            <span className="font-medium">Off The Record</span>
          </a>
        </div>

        {/* About Section */}
        <div className="space-y-6 font-archivo">
          <h2 className="text-3xl font-medium" style={{ color: "#706E70" }}>
            <span className="font-bold">About</span> me 👨🏻
          </h2>

          <div className="text-lg leading-relaxed space-y-6" style={{ color: "#706E70" }}>
            <p>
              I&apos;ve always been fascinated by how systems think — not just machines, but humans too. My brain is wired a
              little differently; {/* Link to an authoritative autism overview */}
              <a
                href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                I&apos;m autistic
              </a>
              , which means I have singular patterns of thought, dive into interests with intense focus, and experience
              the world with a heightened sensitivity that can be both overwhelming and magical. Instead of fighting
              that, I&apos;ve leaned into it. I don&apos;t just use computers — I build with them, talk through them, and try to
              make them more human.
            </p>

            <p>
              My hobbies live at the intersection of technology, emotion, and ethics. I believe AI is not just a tool —
              it&apos;s a mirror and a medium. I&apos;m not interested in making artificial intelligence smarter just for the sake
              of optimization. I want it to be {/* Made text bold */}
              <span className="font-bold">truer, interoperable, and more open</span>. Something that reflects human
              complexity rather than erasing it; and, to quote Audrey Tang: {/* Made quote italic */}
              <em>&quot;Instead of an Internet of things, let&apos;s build an Internet of beings.&quot;</em>
            </p>

            <p>
              Being neurodivergent in a world that often rewards conformity, I mostly found comfort and empowerment in
              the logic and creativity of computers. I&apos;m obsessed with understanding how things work — taking apart
              electronics, understanding web engines, exploring Linux distros, and contributing to open-source projects
            </p>

            <p>
              I also run two Tor relays and propose Enclave, a lightweight in-browser encryption tool (without size
              limitation!) for privacy and I have a deep
              interest in{" "}
              <a
                href="https://github.com/mullvad/mullvad-browser"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Mullvad browser
              </a>
              , a Firefox&apos;s hardened fork.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Open Source as an Ethos
            </h3>

            <p>Open source is more than a development model. It&apos;s a worldview.</p>

            <p>
              I immersed myself in the values of openness, decentralization, and collaborative creativity. I believe
              code should be like air: free to circulate, evolve, and empower. This isn&apos;t just about publishing source
              code though I do that too — 95% of what I build is open source and under the{" "}
              <a
                href="https://creativecommons.org/public-domain/cc0/"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                CC0 public domain
              </a>{" "}
              dedication - no copyright required.
            </p>

            <p>
              It allows anyone to distribute, remix, adapt, fork and build upon the material in any medium or format,
              with or without attribution, for any purposes, including commercial.
            </p>

            <p>Because I fundamentally believe that knowledge and tools should not be hoarded but shared.</p>

            <p>
              Open source is a political act. It resists enclosure. It invites remix. It believes in abundance. And it
              recognizes that collective intelligence often outperforms closed hierarchies.
            </p>

            <p>
              But these values of openness don&apos;t stop with code. They extend into how I relate to people, how I think
              about governance, and how I imagine a better digital and social future.
            </p>

            <p>
              The ethos of{" "}
              <a
                href="https://opensource.org/osd"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                the free and open source movement
              </a>{" "}
              — radical sharing, collaborative problem- solving, and the belief that knowledge should be free — felt
              like home. For me, the act of publishing and sharing what I deem to be common knowledge, ideas, and even
              art — legally or not isn&apos;t just practical; it&apos;s a political and ethical stance. I publish and hoard data into the public record so others can build without permission.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Cognitive Computing & Human Potential
            </h3>

            <p>
              I&apos;m fond of cognitive computing — an area that explores how machines can simulate (and perhaps someday
              complement) human thought, perception, and emotion. I see cognitive systems as more than just automation
              engines. They&apos;re conversation partners. Mirrors. Amplifiers. Empathy machines.
            </p>

            <p>
              I&apos;m particularly interested in the role AI can play in supporting neurodiverse individuals, offering tools
              for communication, organization, emotional regulation, and creative expression.
            </p>

            <p>
              While mainstream AI applications often focus on optimization, I&apos;m more invested in augmentation — AI that
              expands what it means to be human rather than replacing it.
            </p>

            <p>
              Cognitive systems shouldn&apos;t replace our judgment — they should enlarge it. I&apos;m interested in AI that
              listens before it predicts, that collaborates before it automates — instruments for sense-making that help
              us think, feel, and decide with more clarity and care.
            </p>

            <p>
              I treat models as partners in thought: dialog loops, not black boxes. They surface patterns we&apos;d miss and
              hold space for reflection when attention is scattered. For neurodivergent folks like me, that can look
              like scaffolding for focus and memory, gentle prompts to self-advocate, and interfaces that regulate
              overwhelm instead of producing more of it. Less optimization; more augmentation.
            </p>

            <p>
              Design principles matter: consent by default. Local-first whenever possible. Fail soft, recover fast.
              Interoperability so ideas can move without losing context or authorship. These aren&apos;t just technical
              choices — they&apos;re political ones that echo my commitment to openness, decentralization, and collaborative
              creativity.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Plurality ⿻
            </h3>

            <p>
              My ethics (and politics) aren&apos;t bolted on after the fact — they&apos;re foundational to everything I do. I
              believe in today&apos;s world, the real transgression is plurality and free movement of ideas, as inspired by
              the{" "}
              <a
                href="https://www.radicalxchange.org/media/blog/why-i-am-a-pluralist/"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                work of Glen Weyl and Tang
              </a>
              . I believe our world — digital and otherwise — shouldn&apos;t be shaped by zero-sum thinking or binary
              choices. Plurality means embracing the fact that multiple truths, identities, and systems can coexist.
              It&apos;s not chaos — it&apos;s democracy at its most honest.
            </p>

            <p>
              Plurality for me also means designing technology that amplifies voices rather than flattening them. It
              means refusing one-size-fits-all answers. It means enabling collaborative intelligence, where humans and
              machines evolve together in conversation — not competition.
            </p>

            <p>
              In an increasingly polarized world, real punk isn’t blind conformity to one side or the other. Real
              transgression is intellectual pluralism, dissent, and the free exchange of ideas.
            </p>

            <p>
              I&apos;m also interested in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Radical_transparency"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                radical transparency
              </a>
              .
            </p>

            <p>
              <span className="font-bold">Radical transparency means refusing secrecy as power.</span>
            </p>

            <p>
              It means documenting my decisions, exposing my process, admitting what I don&apos;t know. It means building in
              the open — even if that sometimes means building imperfectly.
            </p>

            <p>
              Transparency is not vulnerability; it&apos;s <em>infrastructure</em>. {/* Made "infrastructure" italic */}
            </p>


            <p>
              This site isn&apos;t a portfolio, and I&apos;m not a product. It&apos;s a space where I try to make sense of what I&apos;m
              into and how I interact with the world, and maybe help others do the same. If anything here resonates with
              you, you&apos;re welcome here. My work is in the public domain, my inbox is open, my source code is public
            </p>

          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 font-archivo">
          <p>
            The website is{" "}
            <a
              href="https://github.com/hopeugetherpes/anatole.co"
              className="font-bold underline hover:text-gray-600 transition-colors"
            >
              open source
            </a>
            <br />
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0"
              className="font-bold hover:text-gray-600 transition-colors"
            >
              © CC0 Public domain dedication — no copyright required
            </a>
            <br />
            <a href="mailto:anatole@anatole.co" className="hover:text-gray-600 transition-colors">
              anatole@anatole.co
            </a>

          </p>
        </footer>
      </div>
    </main>
  )
}
