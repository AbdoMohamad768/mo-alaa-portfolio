const workItems = [
  {
    type: "App & Web",
    year: "2024",
    title: "Improving onboarding for higher conversions",
    description:
      "Redesigned the signup and first-session experience to reduce friction and increase activation.",
    metricLabelLeft: "Signup completion",
    metricValueLeft: "Up by 42%",
    metricLabelRight: "Time to value",
    metricValueRight: "Down by 35%",
  },
  {
    type: "Product Design",
    year: "2023",
    title: "Turning one-off users into returning customers",
    description:
      "Created a membership model and dashboard that keeps users engaged and coming back.",
    metricLabelLeft: "Returning users",
    metricValueLeft: "+32%",
    metricLabelRight: "Average session time",
    metricValueRight: "+18%",
  },
  {
    type: "Web Experience",
    year: "2023",
    title: "A clean marketing site for a SaaS launch",
    description:
      "End-to-end design and build of a responsive marketing site focused on clarity and storytelling.",
    metricLabelLeft: "Launch timeline",
    metricValueLeft: "Shipped in 3 weeks",
    metricLabelRight: "Bounce rate",
    metricValueRight: "-27%",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="max-w-5xl mx-auto">
      <div className="mt-24 space-y-8 fade-in-up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              Featured Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Some of my recent case studies
            </h2>
          </div>
          <p className="max-w-sm text-xs text-neutral-400 sm:text-sm">
            A selection of product and interface work focused on clear outcomes,
            measurable impact, and thoughtful execution.
          </p>
        </div>

        <div className="space-y-4">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="fade-in-up rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                  {item.type}
                </span>
                <span>{item.year}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-50 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                {item.description}
              </p>
              <div className="mt-4 grid gap-4 text-xs text-neutral-300 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.metricLabelLeft}
                  </p>
                  <p className="mt-1 text-base font-semibold text-emerald-300">
                    {item.metricValueLeft}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.metricLabelRight}
                  </p>
                  <p className="mt-1 text-base font-semibold text-emerald-300">
                    {item.metricValueRight}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
