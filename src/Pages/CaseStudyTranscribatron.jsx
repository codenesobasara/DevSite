import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import NavBar from "@/components/ui/NavBar"
import SEO, { schemas } from "@/components/SEO"

const techStack = [
  "Native iOS Development",
  "Declarative UI Framework",
  "On-Device AI Model",
  "Local Data Storage",
  "Cloud Sync",
  "Audio Processing",
  "Multi-Provider AI",
]

const features = [
  {
    title: "On-Device Transcription",
    description:
      "Audio never leaves the device. An on-device AI model runs directly on Apple hardware, using dedicated AI hardware for speed and the GPU as a fallback. No cloud uploads, no latency, no privacy concerns.",
  },
  {
    title: "AI-Powered Cleanup",
    description:
      "Raw transcriptions get polished by the user's choice of AI provider. Filler words disappear, grammar tightens up, and the tone matches the user's selected style. Formal, casual, concise, or something custom.",
  },
  {
    title: "System-Wide Keyboard Extension",
    description:
      "A custom iOS keyboard that lets users dictate directly into any text field on the phone. Mail, Messages, Notes, third-party apps. Tap the mic, talk, and the finished text drops right in.",
  },
  {
    title: "Meeting Intelligence",
    description:
      "Record entire meetings and get structured analysis back. Action items, follow-ups, important dates, key decisions. Customizable templates let users define exactly what they want extracted from each meeting type.",
  },
  {
    title: "Multi-Provider AI",
    description:
      "Users choose their own AI backend. Claude, OpenAI, Gemini, Grok, or a fully local model that costs nothing. A built-in cost calculator shows the price per request so users can make informed decisions.",
  },
  {
    title: "Style Presets",
    description:
      "Six built-in writing styles and unlimited custom presets. Apply a different tone to the same transcription without re-recording. Version history tracks how presets evolve over time.",
  },
]

const results = [
  { label: "Audio processing", value: "100% on-device" },
  { label: "AI providers supported", value: "5 (including local)" },
  { label: "Platform coverage", value: "iOS + macOS" },
  { label: "Extensions", value: "Keyboard + Share" },
  { label: "Data sync", value: "Encrypted iCloud" },
]

function CaseStudyTranscribatron() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <SEO
        title="Transcribatron Case Study"
        description="A native iOS app that transcribes speech entirely on-device, then polishes the text with the user's choice of AI provider."
        path="/case-study/transcribatron"
        schema={schemas.breadcrumbs([{name: 'Home', path: '/'}, {name: 'Case Studies', path: '/case-study'}, {name: 'Transcribatron', path: '/case-study/transcribatron'}])}
      />
      <NavBar agencyName="Pontera Studios" />

      <main className="w-full max-w-4xl mx-auto px-5 xl:px-8 pt-24 xl:pt-50">
        <Link
          to="/case-study"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          All Case Studies
        </Link>

        <p className="text-white/40 text-sm uppercase tracking-wider mb-2">
          iOS Application
        </p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-4">Transcribatron</h1>
        <p className="text-xl xl:text-2xl text-white/70 mb-8">
          Voice-to-text that actually respects your privacy
        </p>

        <div className="rounded-lg overflow-hidden border border-white/10 mb-10 xl:mb-16">
          <img
            src="/images/transcribeAtron.webp"
            alt="Transcribatron app interface"
            className="w-full object-cover"
          />
        </div>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">The Problem</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Most voice-to-text apps work the same way. You talk, your audio
              gets uploaded to a server somewhere, and you get a transcript
              back. The transcription is usually rough. Filler words, broken
              sentences, zero formatting. If you want something you can
              actually use, you are spending another ten minutes cleaning it
              up by hand.
            </p>
            <p>
              For professionals who dictate regularly, lawyers, journalists,
              researchers, sales teams, this is a daily friction point. And
              for anyone handling sensitive information, the idea of audio
              being sent to a third-party server is a non-starter.
            </p>
            <p>
              The existing tools force a choice: convenience or privacy. Good
              transcription or good formatting. One AI provider or another.
              Nobody was building something that gave users all of it without
              compromise.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">What We Built</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              Transcribatron is a native iOS and macOS app that handles the
              entire pipeline. Record, transcribe, clean up, and deliver
              polished text without any of it leaving the device unless the
              user says so.
            </p>
            <p>
              Transcription runs on-device using an on-device AI model
              optimized for Apple hardware. It uses dedicated AI hardware
              when available and falls back to the GPU. The result is fast,
              accurate transcription with zero network dependency.
            </p>
            <p>
              After transcription, the user can optionally run the text
              through an AI post-processor. This is where they choose: Claude,
              OpenAI, Gemini, Grok, or a completely local model that never
              touches the internet. The AI cleans up the transcript, applies
              the user's preferred writing style, and delivers something
              ready to use.
            </p>
            <p>
              The keyboard extension is what ties it all together. Users
              switch to the Transcribatron keyboard in any app, tap the
              microphone, speak, and the polished text inserts directly into
              whatever they were typing. No app switching, no copy-paste.
            </p>
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-8">Key Features</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">Built With</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-8">The Impact</h2>
          <div className="space-y-0">
            {results.map((result) => (
              <div
                key={result.label}
                className="flex justify-between items-center py-5 border-t border-white/10"
              >
                <span className="text-white/50">{result.label}</span>
                <span className="text-white font-medium">{result.value}</span>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </section>

        <section className="mb-10 xl:mb-16">
          <h2 className="text-2xl xl:text-3xl font-medium mb-6">How We Approached It</h2>
          <div className="text-white/60 text-base xl:text-lg leading-relaxed space-y-4">
            <p>
              The core constraint was privacy. Transcription had to run
              entirely on-device, which meant integrating an on-device AI
              model and optimizing it for Apple's dedicated AI hardware.
              We built a fallback chain, AI hardware first, then GPU, then
              CPU, so the
              app works reliably across every device generation without the
              user thinking about it.
            </p>
            <p>
              The keyboard extension was the hardest piece. iOS keyboard
              extensions run in a sandboxed process with strict memory limits.
              We built a secure communication layer between the keyboard and
              the main app so the keyboard can trigger recording and receive processed text
              back from the main app without violating any sandbox rules.
            </p>
            <p>
              For the AI layer, we built a provider-agnostic post-processing
              system. Each provider, Claude, OpenAI, Gemini, Grok, and a
              local model, implements the same protocol. Switching
              providers is a single setting change with zero impact on the
              rest of the app. The cost calculator pulls pricing data for
              each model so users can make informed decisions.
            </p>
            <p>
              Data persistence uses local storage with encrypted cloud sync.
              Six schema versions with automated migrations, encrypted iCloud
              sync across devices, and shared containers for extension access.
              The user
              never thinks about syncing. Their transcriptions and meeting
              notes just appear on every device.
            </p>
          </div>
        </section>

        <section className="mb-20 p-8 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-white/30 text-xs uppercase tracking-wider mb-3">
            Project Status
          </p>
          <h3 className="text-2xl font-medium mb-3">
            Currently in Development
          </h3>
          <p className="text-white/50 leading-relaxed">
            Transcribatron is in active development heading toward an App Store
            launch. The core transcription engine, AI post-processing pipeline,
            keyboard extension, and meeting intelligence features are built and
            being refined. We are focused on performance optimization and
            polishing the experience before release.
          </p>
        </section>

        <div className="mb-20 border-t border-white/10 pt-8">
          <Link
            to="/case-study"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            &larr; Back to all case studies
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CaseStudyTranscribatron
