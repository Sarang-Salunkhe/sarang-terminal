import { Trophy, Award, Medal, Briefcase } from "lucide-react";

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
          Recognition & milestones throughout my journey
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>

          <div className="space-y-14">
            {/* Achievement 1 */}
            <div
              className="relative pl-20 group"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="absolute left-0 top-0 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white shadow-[0_0_15px_rgba(0,238,255,0.6)] group-hover:scale-110 transition">
                <Award size={32} />
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] transition-all hover:-translate-y-2 border border-cyan-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full">
                    Academic Excellence
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Ongoing</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Diploma in Computer Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Final Year (3rd Year)</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Maintaining high academic performance while actively working on real-world
                  development projects and competitions.
                </p>
              </div>
            </div>
            

            {/* Achievement 2 */}
            <div
              className="relative pl-20 group"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="absolute left-0 top-0 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white shadow-[0_0_15px_rgba(0,238,255,0.6)] group-hover:scale-110 transition">
                <Trophy size={32} />
              </div>
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,238,255,0.4)] transition-all hover:-translate-y-2 border border-cyan-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold rounded-full">
                    3rd Place
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">2024</span>
                </div>
                <h3 className="text-xl font-bold mb-1">Web Fusion Competition</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  DY Patil Institute of Technology
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Secured 3rd place by developing an advanced food delivery platform,
                  demonstrating strong full-stack engineering capability and innovative UI.
                </p>
              </div>
            </div>

            {/* NEW – Internship at Sun Fibo */}
              <div 
                className="relative pl-20"
                data-aos="fade-right"
                data-aos-duration="900"
                >
                <div className="absolute left-0 top-0 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white shadow-lg">
                  <Briefcase size={32} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-x-2 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold rounded-full">
                      Internship
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Software Intern at Sun Fibo</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <a href="https://www.sunfibo.com/">Sun Fibo Pvt. Ltd.</a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Worked as a software intern gaining hands-on experience in full-stack development, mainly focused on CAD Customization and Development collaborating on real-world projects, improving code quality, and contributing to scalable backend solutions.
                  </p>
                </div>
              </div>

              {/* Multiple Projects */}
              <div 
                className="relative pl-20"
                data-aos="fade-right"
                data-aos-duration="900"
                >
                <div className="absolute left-0 top-0 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white shadow-lg">
                  <Medal size={32} />
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-x-2 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full">
                      Projects
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">2023-2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multiple Successful Projects</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built Photopix, YTGrav, and many other projects demonstrating a strong grip over frontend and backend development.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
