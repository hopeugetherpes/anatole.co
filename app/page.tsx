"use client"

import Image from "next/image"
import { Lock } from "lucide-react"
import { useEffect, useRef } from "react"

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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D66565"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="none" stroke="#538FBD" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="12" cy="10" r="6" fill="#538FBD" />
              <path d="M8 16l2-2h4c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z" fill="#538FBD" />
              <path d="M8 16l-2 2v-2z" fill="#538FBD" />
            </svg>
            <span className="font-medium">Signal</span>
          </a>

          <a
            href="https://github.com/hopeugetherpes?tab=repositories"
            className="flex items-center gap-3 px-6 py-3 rounded-full transition-colors"
            style={{
              backgroundColor: "#65A856",
              color: "#F0904A",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF6EB")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FCEBD7")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F0904A"
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
              backgroundColor: "#E0F2DC",
              color: "#65A856",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E0F2DC")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#EDDEFC")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="#A276CF" />
              <path
                d="M8.5 7c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5h1c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5h-1zm5 0c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5h1c1.5 0 2.5-1 2.5-2.5v-3c0-1.5-1-2.5-2.5-2.5h-1zm-5 8c0 1.5 1 2.5 2.5 2.5h1v2c0 1-1 2-2 2s-2-1-2-2v-2.5z"
                fill="white"
              />
            </svg>
            <span className="font-medium">Mastodon</span>
          </a>

          <a
            href="https://www.z3r0.anatole.co/"
            className="flex items-center gap-3 px-6 py-3 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
          >
            <Lock size={20} />
            <span className="font-medium">Z3R0 Encrypt</span>
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
              little differently; {/* Added link to ChatGPT share */}
              <a
                href="https://chatgpt.com/share/68824196-2ac4-800c-a23d-685202a4e518"
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
              I also run two Tor relays and offer{" "}
              <a
                href="https://pgp.z3r0.app/"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Offline-PGP
              </a>{" "}
              <span className="font-medium">and</span>{" "}
              <a
                href="https://www.z3r0.anatole.co/"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                Z3R0
              </a>
              , a lightweight in-browser encryption tool (without size limitation!) for privacy and I have a deep
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

            <p>
              I care about systems that expand agency — co-writing, co-sketching, co-reasoning. An AI that mirrors
              without flattening, amplifies voice without stealing it. Fewer prescriptions, more possibilities. Fewer
              rigid workflows, more creative play.
            </p>

            <p>
              In practice, that means small, reliable tools that fit into daily rituals: thought companions, not
              attention traps; empathy machines, not engagement machines. It means treating data as something entrusted,
              not extracted. It means measuring success by the quality of outcomes and the dignity of the process, not
              just the speed of the click.
            </p>

            <p>
              I'm not trying to make machines feel human. I'm trying to help humans feel more resourced, less alone —
              and to build technology that earns its place in our lives.
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
              you, you're welcome here. My work is in the public domain, my inbox is open,{" "}
              <a
                href="https://github.com/hopeugetherpes"
                className="underline decoration-2 underline-offset-2 hover:text-gray-600 transition-colors"
              >
                my source code is public
              </a>
              :
            </p>

            <p className="font-medium italic" style={{ color: "#706E70" }}>
              Let's build something weird and worthwhile ✨
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
