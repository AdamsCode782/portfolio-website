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
              Senior Full-Stack Engineer
            </h3>

            <p className="text-muted-foreground">
              I am a Senior Full-Stack Engineer with eight years of experience building data-driven web applications across government, early-stage startup, 
              and client-facing environments. My focus is on delivering end-to-end systems spanning React and TypeScript frontends, Node-based APIs, geospatial tools, 
              and real-time data infrastructure.
            </p>

            <p className="text-muted-foreground">
              I have worked across the full stack on platforms built for real operational impact, including government reporting systems used for 
              federal compliance and policy decision-making, AI-powered mental wellbeing apps, and subscription platforms with complex billing workflows. 
              I care about building maintainable, well-structured systems that translate complex requirements into products people can actually use.
            
            </p>

            {/* Buttons */}
            <div className="pt-4 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>
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
                    Building modular, type-safe systems with a focus on scalable state management, performance, and maintainability.
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
                    I've built real-time dashboards and visualization tools used in government and production environments.
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
                    I build end-to-end solutions involving schema design, authentication, and real-time infrastructure.
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
