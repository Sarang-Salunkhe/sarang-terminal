import { useState, useEffect } from "react";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const bootLines = [
    "Initializing system modules...",
    "Boot sequence complete."
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const [showTitle, setShowTitle] = useState(false);
  const [finalText, setFinalText] = useState("");

  const finalTitle = "~/Sarang's Terminal _";

  // Typing boot lines
  useEffect(() => {
    if (showTitle) return;

    if (currentLine < bootLines.length) {
      if (currentChar === 0) {
        setDisplayedLines(prev => [...prev, ""]);
      }

      if (currentChar < bootLines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedLines(prev => {
            const updated = [...prev];
            updated[currentLine] =
              updated[currentLine] + bootLines[currentLine][currentChar];
            return updated;
          });

          setCurrentChar(currentChar + 1);
        }, 28); // Faster typing

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 220); // Faster next line

        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setShowTitle(true);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, showTitle]);

  // Final title typing
  useEffect(() => {
    if (!showTitle) return;

    let idx = 0;
    const interval = setInterval(() => {
      setFinalText(finalTitle.slice(0, idx));
      idx++;

      if (idx > finalTitle.length) {
        clearInterval(interval);
        setTimeout(onFinish, 500);
      }
    }, 75); // Faster typing

    return () => clearInterval(interval);
  }, [showTitle]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999999] p-6">
      {!showTitle ? (
        <div className="text-green-400 font-mono text-2xl sm:text-3xl leading-9 tracking-wide">
          {displayedLines.map((line, i) => (
            <div key={i}>{line ? `> ${line}` : ""}</div>
        ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-green-400 font-mono">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest text-center px-4">
            {finalText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

      )}
    </div>
  );
}
