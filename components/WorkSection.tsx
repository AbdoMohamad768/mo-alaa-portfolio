import { AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { LuFolderKanban } from "react-icons/lu";

const workItems = [
  {
    type: "Business Intelligence",
    year: "Present",
    title: "Power BI dashboards & data modeling",
    description:
      "Developing advanced skills in data modeling and visualization as a Microsoft Power BI Specialist Intern at Digital Egypt Pioneers Initiative—a competitive national program in data analytics.",
    metricLabelLeft: "Focus",
    metricValueLeft: "Power BI & BI",
    metricLabelRight: "Scope",
    metricValueRight: "National program",
  },
  {
    type: "Data Analytics",
    year: "2026",
    title: "Data cleaning, analysis & visualization",
    description:
      "Hands-on internship at Instant & Orange Digital Center. Worked with datasets for cleaning, analysis, and visualization using SQL, Python, and Power BI to support data-driven decision making.",
    metricLabelLeft: "Tools",
    metricValueLeft: "SQL, Python, Power BI",
    metricLabelRight: "Outcome",
    metricValueRight: "Interactive dashboards",
  },
  {
    type: "Data Analytics",
    year: "2025",
    title: "Statistical analysis & reporting",
    description:
      "Intensive training at NTI (National Telecommunication Institute). Learned Python, SQL, and Power BI. Applied statistical methods to generate business insights and build data visualizations.",
    metricLabelLeft: "Focus",
    metricValueLeft: "Statistical methods",
    metricLabelRight: "Skills",
    metricValueRight: "Python, SQL, Power BI",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="max-w-5xl mx-auto">
      <div className="mt-24 space-y-8 fade-in-up">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              <LuFolderKanban className="size-4" />
              Featured Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Data analytics & business intelligence
            </h2>
          </div>
          <p className="max-w-sm text-xs text-neutral-400 sm:text-sm">
            Internships and projects in data analysis, visualization, and
            BI—helping organizations turn data into actionable insights.
          </p>
        </div>

        <div className="space-y-4">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="fade-in-up rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em]">
                  {item.type === "Business Intelligence" ? (
                    <AiOutlinePieChart className="size-3.5" />
                  ) : (
                    <AiOutlineBarChart className="size-3.5" />
                  )}
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
