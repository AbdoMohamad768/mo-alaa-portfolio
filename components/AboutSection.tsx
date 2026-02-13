import { LuBriefcase, LuGraduationCap, LuUser } from "react-icons/lu";

export function AboutSection() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto">
      <h1 className="-z-1 absolute top-[50px] left-[50%] translate-x-[-50%] text-center text-[rgb(21,28,29)] text-[650px] tracking-tight max-lg:-tracking-[100px] translate-y-[-30%]">
        About
      </h1>

      <div className="mt-24 grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)] fade-in-up">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            <LuUser className="size-4" />
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            A bit about who I am and how I work.
          </h2>
          <p className="text-sm text-neutral-300 sm:text-base">
            I&apos;m a Data Analyst passionate about uncovering insights from
            data to drive meaningful outcomes. Before focusing on data analysis,
            I gained hands-on experience in cybersecurity, which gave me a
            strong foundation in understanding risks, data protection, and
            system security.
          </p>
          <p className="text-sm text-neutral-300 sm:text-base">
            Now I bring that unique blend of analytical skills and security
            awareness to my work, helping organizations make smarter, safer, and
            more informed decisions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              <LuBriefcase className="size-4" />
              Experience
            </p>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Microsoft Power BI Specialist Intern
                  </p>
                  <p className="text-xs text-neutral-400">
                    Digital Egypt Pioneers Initiative
                  </p>
                </div>
                <p className="text-xs text-neutral-500">Present</p>
              </div>
              <p className="text-xs text-neutral-300">
                Selected for a competitive national program in data analytics
                and business intelligence. Developing advanced skills in data
                modeling, visualization, and building interactive dashboards
                with Microsoft Power BI.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Data Analytics Intern
                  </p>
                  <p className="text-xs text-neutral-400">
                    Instant & Orange Digital Center
                  </p>
                </div>
                <p className="text-xs text-neutral-500">Jan — Feb 2026</p>
              </div>
              <p className="text-xs text-neutral-300">
                Hands-on internship with datasets for cleaning, analysis, and
                visualization. Used SQL, Python, and Power BI to extract
                insights and build dashboards for data-driven decision making.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Data Analytics Intern
                  </p>
                  <p className="text-xs text-neutral-400">
                    NTI (National Telecommunication Institute)
                  </p>
                </div>
                <p className="text-xs text-neutral-500">Aug — Sept 2025</p>
              </div>
              <p className="text-xs text-neutral-300">
                Intensive training in Python, SQL, and Power BI. Applied
                statistical methods for business insights and gained practical
                experience in data visualization and reporting.
              </p>
            </div>
            {/* <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-50">
                    Cybersecurity Member
                  </p>
                  <p className="text-xs text-neutral-400">
                    Microsoft Student Club — AOU
                  </p>
                </div>
                <p className="text-xs text-neutral-500">Aug 2024 — July 2025</p>
              </div>
              <p className="text-xs text-neutral-300">
                Active cybersecurity team member. Participated in awareness
                campaigns, hands-on labs, and security challenges. Promoted
                secure digital practices across the community.
              </p>
            </div> */}
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
              <LuGraduationCap className="size-4" />
              Education
            </p>
            <div className="space-y-2 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm font-semibold text-neutral-50">
                Undergraduate — Computer Science
              </p>
              <p className="text-xs text-neutral-400">Arab Open University</p>
              <p className="text-xs text-neutral-500">2023 — Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
