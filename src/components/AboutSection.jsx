import { Cpu, Layers, Globe, FileDown } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - text */}
          <div className="space-y-6 flex flex-col">
            <h3 className="text-2xl font-semibold">
              Front-End Engineer & Problem Solver
            </h3>

            <p className="text-muted-foreground">
              I'm a senior frontend developer with eight years of experience building accessible, 
              high-performance web applications, especially in civic tech and government. 
              I've worked across a wide range of frontend technologies and frameworks, 
              and I focus on creating clear, dependable user experiences that hold up at scale. 
            </p>

            <p className="text-muted-foreground">
              My work often bridges design and engineering, 
              and I care deeply about building tools that are both effective and genuinely useful.
              I enjoy designing intuitive user interfaces, optimizing
              performance, and writing maintainable code that scales with
              complexity. I’m always exploring ways to make technology serve
              people more effectively.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>

                {/* <a
                  href="/Adam_Steele_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Download CV
                </a> */}
              </div>
            </div>
          </div>

          {/* Right side - feature cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-End Engineering</h4>
                  <p className="text-muted-foreground">
                    Building performant, maintainable interfaces using modern
                    JavaScript frameworks and reusable component systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Visualization</h4>
                  <p className="text-muted-foreground">
                    Translating complex datasets into clear, interactive visuals
                    using charting libraries and mapping tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Civic Technology</h4>
                  <p className="text-muted-foreground">
                    Partnering with policy teams and public agencies to design
                    digital tools that make data and services more accessible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
