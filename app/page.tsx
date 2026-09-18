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

const otrIconDataUri = "/otr-icon.png"

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
        <source src="https://anatole.co/everything.mp3" type="audio/mpeg" />
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
            href="https://off-the-record.anatole.co/"
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
              I also run two Tor relays and build Enclave, a lightweight in-browser encryption tool (without size
              limitation!) for privacy and I have a deep
              interest in{" "}
              <a
                href="https://github.com/mullvad/mullvad-browser"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Mullvad browser
              </a>
              , a hardened fork of Firefox.
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