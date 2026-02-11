export function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto">
      <div className="mt-24 grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)] fade-in-up">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            A bit about who I am and how I work.
          </h2>
          <p className="text-sm text-neutral-300 sm:text-base">
            I&apos;m a product-focused designer and developer who cares deeply
            about clarity, usability, and creating interfaces that feel
            effortless to use. I enjoy collaborating closely with teams, turning
            messy problems into simple, thoughtful experiences.
          </p>
          <p className="text-sm text-neutral-300 sm:text-base">
            Outside of work, I&apos;m usually learning something new,
            experimenting with side projects, or exploring ideas that sit at the
            intersection of design, code, and AI.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Experience
            </p>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Product Designer / Developer
                  </p>
                  <p className="text-xs text-neutral-400">Company Name</p>
                </div>
                <p className="text-xs text-neutral-500">2023 — Present</p>
              </div>
              <p className="text-xs text-neutral-300">
                Working across product, design, and front-end implementation to
                ship usable, outcome-driven experiences.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Previous Role
                  </p>
                  <p className="text-xs text-neutral-400">Another Company</p>
                </div>
                <p className="text-xs text-neutral-500">2021 — 2023</p>
              </div>
              <p className="text-xs text-neutral-300">
                Contributed to designing and improving digital products with a
                focus on user needs and business impact.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Education
            </p>
            <div className="space-y-2 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-semibold text-neutral-50">
                Your Degree / Program
              </p>
              <p className="text-xs text-neutral-400">Your University</p>
              <p className="text-xs text-neutral-500">Years attended</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
