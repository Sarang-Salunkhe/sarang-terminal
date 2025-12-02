import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);  // Show after 400px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[999] p-4 rounded-full shadow-lg backdrop-blur-xl border 
      border-cyan-400 bg-white/10 dark:bg-black/30 text-cyan-400 transition-all hover:scale-110
      hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default ScrollToTop;
