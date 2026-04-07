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
              Senior Frontend Engineer & Systems Architect
            </h3>

            <p className="text-muted-foreground">
              I am a Senior Frontend Engineer with eight years of experience 
              architecting high-performance, scalable web applications. 
              My focus is on building robust client-side systems that prioritize type 
              safety, component modularity, and optimized rendering pipelines. 
              I specialize in bridging the gap between complex backend services and intuitive, high-fidelity user experiences. 
            </p>

            <p className="text-muted-foreground">
              I have a proven track record of managing technical complexity at scale, from 
              refactoring legacy codebases to implementing modern, server-side rendered architectures. 
              I am deeply invested in engineering excellence—writing maintainable, testable code, 
              optimizing performance, and building resilient systems that handle high-concurrency data flows.
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
                  <h4 className="font-semibold text-lg">Next.js & React Architecture</h4>
                  <p className="text-muted-foreground">
                    Architecting modular, type-safe systems. 
                    I focus on scalable state management, performance and maintainability.
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
                  <h4 className="font-semibold text-lg">High-Performance Data Systems</h4>
                  <p className="text-muted-foreground">
                    Transforming complex datasets into interactive interfaces. 
                    I integrate real-time data streams and visualization tools into production dashboards.
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
                  <h4 className="font-semibold text-lg">Full-Stack Integration</h4>
                  <p className="text-muted-foreground">
                    Designing efficient API layers and secure data-fetching strategies. 
                    I build end-to-end solutions involving schema design, robust authentication, and real-time infrastructure..
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
