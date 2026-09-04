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
              It's nice to meet you,{" "}
              <a
                href="mailto:anatole@anatole.co"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                please do introduce yourself
              </a>{" "}
              – you don't really need a reason or occasion.
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
              I've always been fascinated by how systems think — not just machines, but humans too. My brain is wired a
              little differently; {/* Link to an authoritative autism overview */}
              <a
                href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                I'm autistic
              </a>
              , which means I have singular patterns of thought, dive into interests with intense focus, and experience
              the world with a heightened sensitivity that can be both overwhelming and magical. Instead of fighting
              that, I've leaned into it. I don't just use computers — I build with them, talk through them, and try to
              make them more human.
            </p>

            <p>
              My hobbies live at the intersection of technology, emotion, and ethics. I believe AI is not just a tool —
              it's a mirror and a medium. I'm not interested in making artificial intelligence smarter just for the sake
              of optimization. I want it to be {/* Made text bold */}
              <span className="font-bold">truer, interoperable, and more open</span>. Something that reflects human
              complexity rather than erasing it; and, to quote Audrey Tang: {/* Made quote italic */}
              <em>"Instead of an Internet of things, let's build an Internet of beings."</em>
            </p>

            <p>
              Being neurodivergent in a world that often rewards conformity, I mostly found comfort and empowerment in
              the logic and creativity of computers. I'm obsessed with understanding how things work — taking apart
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
              , a Firefox's hardened fork.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Open Source as an Ethos
            </h3>

            <p>Open source is more than a development model. It's a worldview.</p>

            <p>
              I immersed myself in the values of openness, decentralization, and collaborative creativity. I believe
              code should be like air: free to circulate, evolve, and empower. This isn't just about publishing source
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
              But these values of openness don't stop with code. They extend into how I relate to people, how I think
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
              art — legally or not isn't just practical; it's a political and ethical stance. I publish and hoard data into the public record so others can build without permission.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Cognitive Computing & Human Potential
            </h3>

            <p>
              I'm fond of cognitive computing — an area that explores how machines can simulate (and perhaps someday
              complement) human thought, perception, and emotion. I see cognitive systems as more than just automation
              engines. They're conversation partners. Mirrors. Amplifiers. Empathy machines.
            </p>

            <p>
              I'm particularly interested in the role AI can play in supporting neurodiverse individuals, offering tools
              for communication, organization, emotional regulation, and creative expression.
            </p>

            <p>
              While mainstream AI applications often focus on optimization, I'm more invested in augmentation — AI that
              expands what it means to be human rather than replacing it.
            </p>

            <p>
              Cognitive systems shouldn't replace our judgment — they should enlarge it. I'm interested in AI that
              listens before it predicts, that collaborates before it automates — instruments for sense-making that help
              us think, feel, and decide with more clarity and care.
            </p>

            <p>
              I treat models as partners in thought: dialog loops, not black boxes. They surface patterns we'd miss and
              hold space for reflection when attention is scattered. For neurodivergent folks like me, that can look
              like scaffolding for focus and memory, gentle prompts to self-advocate, and interfaces that regulate
              overwhelm instead of producing more of it. Less optimization; more augmentation.
            </p>

            <p>
              Design principles matter: consent by default. Local-first whenever possible. Fail soft, recover fast.
              Interoperability so ideas can move without losing context or authorship. These aren't just technical
              choices — they're political ones that echo my commitment to openness, decentralization, and collaborative
              creativity.
            </p>

            <h3 className="text-2xl font-medium pt-4" style={{ color: "#706E70" }}>
              Plurality ⿻
            </h3>

            <p>
              My ethics (and politics) aren't bolted on after the fact — they're foundational to everything I do. I
              believe in today's world, the real transgression is plurality and free movement of ideas, as inspired by
              the{" "}
              <a
                href="https://www.radicalxchange.org/media/blog/why-i-am-a-pluralist/"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                work of Glen Weyl and Tang
              </a>
              . I believe our world — digital and otherwise — shouldn't be shaped by zero-sum thinking or binary
              choices. Plurality means embracing the fact that multiple truths, identities, and systems can coexist.
              It's not chaos — it's democracy at its most honest.
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
              I'm also interested in{" "}
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
              It means documenting my decisions, exposing my process, admitting what I don't know. It means building in
              the open — even if that sometimes means building imperfectly.
            </p>

            <p>
              Transparency is not vulnerability; it's <em>infrastructure</em>. {/* Made "infrastructure" italic */}
            </p>


            <p>
              This site isn't a portfolio, and I'm not a product. It's a space where I try to make sense of what I'm
              into and how I interact with the world, and maybe help others do the same. If anything here resonates with
              you, you're welcome here. My work is in the public domain, my inbox is open, my source code is public
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
