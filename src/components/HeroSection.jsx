import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const adjectives = ["intuitive", "accessible", "scalable", "high-performing"];

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentAdj, setCurrentAdj] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = adjectives[currentAdj];
    let timeout;

    if (!isDeleting && displayedText.length < word.length) {
      timeout = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length + 1));
      }, 120);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(word.slice(0, displayedText.length - 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentAdj((prev) => (prev + 1) % adjectives.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentAdj]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-12"
    >
      {/* Left side: text and buttons */}
      <div className="md:w-5/12 text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-muted-foreground opacity-80 block md:inline animate-fade-in">
            Hi, I'm
          </span>{" "}
          <span className="text-primary opacity-0 md:inline-block animate-fade-in-delay-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Adam
          </span>{" "}
          <span className="text-gradient opacity-0 md:inline-block animate-fade-in-delay-2">
            Steele
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
          I build <span className="font-semibold text-primary">{displayedText}</span>
          <span className="blinking-caret">|</span> full-stack web applications that balance speed and usability.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="cosmic-button flex items-center justify-center w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a
            href="/Adam_Steele_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side: skills card */}
      <div className="md:w-5/12 flex justify-center md:justify-end z-10">
        <div className="bg-background/90 backdrop-blur-xl shadow-lg rounded-2xl p-8 max-w-sm w-full animate-fade-in-delay-2">
          <h3 className="text-2xl font-semibold mb-4 text-center">Core Skills</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
              React / JavaScript
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
              Redux / Zustand
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
              REST & GraphQL APIs
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
              Data Visualization (D3, Chart.js)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full inline-block"></span>
              Civic & Gov Tech
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-80">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Caret blink animation */}
      <style jsx>{`
        .blinking-caret {
          display: inline-block;
          width: 1px;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};
