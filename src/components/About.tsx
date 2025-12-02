import { Code2, Rocket, Heart } from "lucide-react";
import Magnetic from "./Magnetic";

function About() {
  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-8 
      bg-white/60 dark:bg-gray-900/40 
      backdrop-blur-xl 
      border-y border-gray-300/30 dark:border-cyan-300/20"
      data-aos="fade-up"
    >

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-16">
          A passionate developer who turns ideas into digital reality.
        </p>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT Description Column */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-700 dark:text-gray-300">
              I'm currently in my final year of Diploma in Computer Engineering, with a deep enthusiasm
              for modern web technologies and problem solving. I enjoy transforming concepts into
              visually pleasing, high-performing digital applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              My learning journey focuses on mastering full-stack development with hands-on projects.
              I believe in writing clean, scalable code and constantly improving through practice and real-world applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Apart from development, I like exploring new technologies, contributing to meaningful
              projects, and collaborating with like-minded developers.
            </p>
          </div>

          {/* RIGHT Skill Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <Magnetic>
              <div
                className="group p-6 rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl
                shadow-lg hover:shadow-[0_0_25px_rgba(0,238,255,0.5)] border border-cyan-400/30
                transition-all hover:-translate-y-2 cursor-hover-target"
                data-aos="zoom-in"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white shadow-lg">
                    <Code2 size={30} />
                  </div>
                  <h3 className="text-xl font-semibold">Clean Code</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  I focus on maintainable, optimized and scalable coding architecture.
                </p>
              </div>
            </Magnetic>

            <Magnetic>
              <div
                className="group p-6 rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl
                shadow-lg hover:shadow-[0_0_25px_rgba(0,238,255,0.5)] border border-cyan-400/30
                transition-all hover:-translate-y-2 cursor-hover-target"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white shadow-lg">
                    <Rocket size={30} />
                  </div>
                  <h3 className="text-xl font-semibold">Fast Learner</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Adapt quickly and love mastering new tools, technologies and frameworks.
                </p>
              </div>
            </Magnetic>

            <Magnetic>
              <div
                className="group p-6 rounded-2xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl
                shadow-lg hover:shadow-[0_0_25px_rgba(0,238,255,0.5)] border border-cyan-400/30
                transition-all hover:-translate-y-2 cursor-hover-target"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white shadow-lg">
                    <Heart size={30} />
                  </div>
                  <h3 className="text-xl font-semibold">Passionate</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Love building projects that create impact and solve real problems.
                </p>
              </div>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
