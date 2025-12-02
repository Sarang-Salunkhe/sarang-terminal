import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { ReactTyped } from "react-typed";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import Magnetic from './Magnetic';
import { useRef } from 'react';




function Hero() {
  const tiltRafRef = useRef<number | null>(null);
  const tiltPendingRef = useRef({ x: 0, y: 0 });

  const applyTilt = (motionDiv: HTMLElement) => {
    const { x, y } = tiltPendingRef.current;
    motionDiv.style.transform = `perspective(1200px) rotateY(${x / 20}deg) rotateX(${y / -20}deg)`;
    tiltRafRef.current = null;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-14 sm:pt-28 md:pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left max-w-xl">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-4xl text-blue-500 dark:text-cyan-400 font-medium animate-fade-in">
                Hello, I'm
              </h2>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold animate-fade-in-up">
                Sarang Salunkhe
              </h1>
              
              <h2 className="text-xl sm:text-4xl lg:text-5xl text-blue-500 dark:text-cyan-400 font-semibold font-mono animate-fade-in-up-delay mt-2">
                <ReactTyped
                  strings={[
                    "Computer Engineer",
                    "Web Developer",
                    "Python Developer",
                    "Tech Enthusiast"
                  ]}
                  typeSpeed={70}
                  backSpeed={40}
                  loop
                />
              </h2>


            </div>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl animate-fade-in-up-delay-2">
              Passionate about creating innovative web solutions and exploring the latest technologies.
              Currently in the final year (3rd year) of my Diploma in Computer Engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up-delay-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Projects
              </a>
              
              </Magnetic>
              <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400 hover:bg-blue-500 dark:hover:bg-cyan-400 hover:text-white rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Get in Touch
              </a>
              </Magnetic>
            </div>

            <div className="flex gap-4 justify-center md:justify-start mb-20 animate-fade-in-up-delay-4">
          
              <a
                href="https://github.com/Sarang-Salunkhe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white rounded-lg transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white rounded-lg transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              
              <a
                href="mailto:sarangsalunkhe08@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white rounded-lg transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in-right" style={{ perspective: "1400px" }}>
            <motion.div
  style={{ scale: 1 }}   // always scale controlled separately
  whileHover={{ scale: 1.06 }}  // only scale animated, no rotate here
  transition={{ type: "spring", stiffness: 250, damping: 18 }}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const inner = (e.currentTarget as HTMLElement).querySelector('.tilt-inner') as HTMLElement | null;
    if (inner) {
      inner.style.transform = `perspective(1200px) rotateY(${x / 20}deg) rotateX(${y / -20}deg)`;
    }
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
  }}
  className="interactive cursor-hover-target aspect-square w-80 sm:w-96 lg:w-[420px] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 shadow-[0_0_50px_rgba(0,200,255,0.4)] border-[3px] border-cyan-400 relative"
>



              <div className="tilt-inner absolute inset-0">
                {/* Animated glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-40 blur-2xl animate-pulse" />

                {/* Glass reflection highlight */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                {/* Blur background image */}
                <img
                  src={profilePic}
                  alt="background blur"
                  className="absolute inset-0 w-full h-full object-cover blur-[18px] scale-125 opacity-60"
                />

                {/* Foreground portrait */}
                <img
                  src={profilePic}
                  alt="Sarang Salunkhe"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_-50%] scale-[1.70]"
                />

                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="reflection"></div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-cyan-400/30 to-transparent blur-2xl" />
              </div>

            </motion.div>

          </div>
        </div>

        </div>
    </section>
  );
}

export default Hero;
