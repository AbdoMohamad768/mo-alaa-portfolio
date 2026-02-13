import Image from "next/image";

const skills = ["/skill-1.png", "/skill-2.png", "/skill-3.png", "/skill-4.png"];

export function SkillsSection() {
  return (
    <section className="banner">
      <h1 className="-z-1 text-center text-[rgb(21,28,29)] text-[650px] tracking-tight max-lg:-tracking-[100px] translate-y-[-30%]">
        Skills
      </h1>
      <div className="w-screen h-48 absolute left-0 bottom-0 bg-linear-to-t from-[#050509] to-transparent"></div>
      <div className="slider">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`item ${Math.trunc((index * 360) / skills.length)}`}
          >
            <Image
              src={skill}
              width={200}
              height={250}
              className="w-full h-full object-cover"
              alt="skill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
