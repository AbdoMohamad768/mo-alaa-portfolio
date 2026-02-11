import { LuGithub, LuMail } from "react-icons/lu";

export function ConnectSection() {
  return (
    <section id="connect" className="max-w-5xl mx-auto">
      <div className="mt-24 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 fade-in-up">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
          Let&apos;s build something together
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Open to collaborating on thoughtful, impact-driven products.
        </h2>
        <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
          Whether you&apos;re looking to refine an existing experience or build
          something new from scratch, I&apos;d love to hear about what
          you&apos;re working on.
        </p>

        <form className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label
              htmlFor="contact-name"
              className="mb-1 block text-xs font-medium text-neutral-300"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="sm:col-span-1">
            <label
              htmlFor="contact-email"
              className="mb-1 block text-xs font-medium text-neutral-300"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="mb-1 block text-xs font-medium text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              placeholder="Tell me a bit about your project or idea..."
              className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-0 transition focus:border-white/40 focus:bg-black/60"
            />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:abdomohmed768@email.com"
              className="inline-flex items-center justify-center gap-1 rounded-full hover:bg-gray-800 hover:text-emerald-300 bg-neutral-50 px-5 py-2.5 text-sm font-medium text-black transition"
            >
              <p>
                <LuMail className="size-5" />
              </p>
              <p>Email me</p>
            </a>
            <a
              href="https://www.linkedin.com/in/your-handle"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-sm font-medium text-neutral-100 transition hover:border-white hover:text-white"
            >
              <p>
                <LuGithub className="size-5" />
              </p>
              <p>Connect on LinkedIn</p>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
