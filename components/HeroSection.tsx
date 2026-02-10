import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero">
      <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Hi, I am Mohamad
          </p>
          <div className="space-y-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <h1 className="text-neutral-200">I craft</h1>
            <h1 className="text-neutral-50">Digital Experiences</h1>
            <h1 className="text-neutral-200">that drive</h1>
            <h1 className="bg-linear-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Impact
            </h1>
          </div>
          <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
            I design and build thoughtful, user-centered products with a focus
            on clarity, performance, and clean execution across web and mobile.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative aspect-4/5 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="/mo-1.png"
              alt="Portrait of Mo Alaa"
              fill
              className="rounded-3xl object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="tag-belt text-xs text-neutral-300">
        <div className="tag-belt-track">
          {[
            "Problem Solver",
            "Detail Oriented",
            "AI Proficient",
            "Scalable Systems",
            "Collaborative",
            "User Focused",
            "Outcome Driven",
          ]
            .concat([
              "Problem Solver",
              "Detail Oriented",
              "AI Proficient",
              "Scalable Systems",
              "Collaborative",
              "User Focused",
              "Outcome Driven",
            ])
            .map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-neutral-200"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
