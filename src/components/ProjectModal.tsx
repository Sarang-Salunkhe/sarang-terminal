import { ExternalLink, Github, X } from "lucide-react";
import toast from "react-hot-toast";

export default function ProjectModal({ open, onClose, project }: any) {
  if (!open) return null;

  const handleClick = (url: string) => {
    if (url === "#") toast("Coming soon!");
    else window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[999] flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl w-[90%] max-w-lg border border-cyan-400 relative shadow-xl">
        
        <button onClick={onClose} className="absolute top-3 right-3 hover:text-red-500">
          <X size={26} />
        </button>

        <img src={project.image} className="rounded-xl w-full h-52 object-cover mb-4" />

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => handleClick(project.link)}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2 hover:scale-105 transition"
          >
            <ExternalLink size={18} /> Live Demo
          </button>
          <button
            onClick={() => handleClick(project.github)}
            className="px-5 py-2 rounded-lg bg-gray-800 text-white flex items-center gap-2 hover:scale-105 transition"
          >
            <Github size={18} /> GitHub Repo
          </button>
        </div>
      </div>
    </div>
  );
}
