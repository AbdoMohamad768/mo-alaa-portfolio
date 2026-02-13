import Image from "next/image";

// const SKILL_ICONS: Record<
//   string,
//   React.ComponentType<{ className?: string }>
// > = {
//   "Data Analysis": AiOutlineBarChart,
//   Python: FaCode,
//   SQL: LuDatabase,
//   "Power BI": AiOutlinePieChart,
//   "Data Visualization": LuTrendingUp,
//   EDA: LuSearch,
//   "Business Intelligence": AiOutlineLineChart,
// };

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative px-6 pt-17 sms:h-screen bg-hero flex justify-center"
    >
      <div className="w-screen h-48 absolute left-0 bottom-0 bg-linear-to-t from-[#050509] to-transparent"></div>

      <div className="overflow-hidden py-16 px-6 sm:py-24 max-w-5xl z-5">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <div className="space-y-6">
            <p className="text-xl font-medium uppercase tracking-[0.2em] text-neutral-400">
              Hi, I am Mohamed
            </p>
            <div className="space-y-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <h1 className="text-neutral-200">I uncover</h1>
              <h1 className="text-neutral-50">
                Insights from{" "}
                <span className="bg-linear-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Data
                </span>
              </h1>
              <h1 className="text-neutral-200">that drive</h1>
              <h1 className="bg-linear-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Meaningful Outcomes
              </h1>
            </div>
            <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
              A Data Analyst passionate about turning raw data into actionable
              insights. With a foundation in cybersecurity, I bring analytical
              rigor and security awareness to help organizations make smarter,
              safer decisions.
            </p>
          </div>

          <div className="group flex items-center justify-center">
            <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden rounded-3xl border border-white/15 bg-black/30 shadow-[0_0_0_rgba(56,189,248,0)] backdrop-blur-md transition-all duration-500 sm:max-w-sm md:max-w-md group-hover:-translate-y-1 group-hover:border-sky-300/60 group-hover:shadow-[0_0_32px_rgba(56,189,248,0.7)] glow">
              <Image
                src="/mo-1.png"
                alt="Portrait of Mo Alaa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
