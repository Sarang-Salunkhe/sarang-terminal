import { useState } from "react";
import { motion } from "framer-motion";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const skills = [
  { name: "C", level: 85, category: "Programming" },
  { name: "C++", level: 80, category: "Programming" },
  { name: "Python", level: 65, category: "Programming" },
  { name: "Java", level: 90, category: "Programming" },
  { name: "C#", level: 80, category: "Programming" },

  { name: "HTML", level: 70, category: "Frontend" },
  { name: "CSS", level: 65, category: "Frontend" },
  { name: "JavaScript", level: 50, category: "Frontend" },
  { name: "Bootstrap", level: 70, category: "Frontend" },

  { name: "Django", level: 85, category: "Backend" },
  { name: "SQL", level: 75, category: "Backend" },

  { name: "React", level: 75, category: "Frameworks" },
  { name: "Tailwind CSS", level: 75, category: "Frameworks" },

  { name: "OracleSQL", level: 70, category: "Databases" },

  { name: "Skyscapes", level: 90, category: "Photography" },
];


const categories = ["Programming", "Frontend", "Backend", "Frameworks", "Databases", "Photography"];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("Programming");

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-20">
      <h2 className="text-5xl font-bold text-center mb-12">
        My <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Skills</span>
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border transition-all font-medium
            ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-[0_0_15px_rgba(0,238,255,0.6)]"
                : "border-blue-500 text-blue-500 dark:text-cyan-400 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills
          .filter((skill) => skill.category === activeCategory)
          .map((skill) => (
            <motion.div
  key={skill.name}
  whileHover={{ scale: 1.08 }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform =
      `perspective(800px) rotateY(${x / 25}deg) rotateX(${y / -25}deg) scale(1.08)`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      `perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)`;
  }}
  className="group flex flex-col items-center gap-3 bg-white/10 dark:bg-black/20
    backdrop-blur-2xl p-6 rounded-2xl border border-cyan-400/30 hover:border-cyan-400
    shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]
    transition-all cursor-pointer will-change-transform"
>
  <div className="w-24 h-24">
    <CircularProgressbar
      value={skill.level}
      text={`${skill.level}%`}
      styles={buildStyles({
        textSize: "22px",
        pathColor: "rgba(0, 110, 255, 0.9)",
        textColor: "#006effff",
        trailColor: "rgba(167, 159, 159, 0.28)",
        strokeLinecap: "round",
      })}
    />
  </div>

  <h3 className="text-lg font-semibold">{skill.name}</h3>
</motion.div>

          ))}
      </div>
    </section>
  );
}

export default Skills;
