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
              Senior Software Developer
            </h3>

            <p className="text-muted-foreground">
                 I'm a Senior Engineer with 8+ years of experience partnering with creators, founders, and civic institutions to build products that solve real problems. 
  I hold a Master's in Urban Policy and started my career working with government teams, learning how to translate complex stakeholder needs into systems that support real-world operations. 
  I work with clients over the long term, helping plan, build, and improve products as they grow.
            </p>

            <p className="text-muted-foreground">
              I’ve built platforms across the full stack, including real-time messaging systems for 30K+ users, government compliance dashboards used in federal decision-making, subscription platforms with complex billing workflows, and migration infrastructure for creators.
I focus on building reliable systems, supporting users in production, and working closely with teams over the long term.
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
                  <h4 className="font-semibold text-lg">Product & Feature Development</h4>
                  <p className="text-muted-foreground">
                    I help teams plan, launch, and improve products as they grow, addressing real-world challenges once systems are live.
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
                  <h4 className="font-semibold text-lg">Migrations & Integrations</h4>
                  <p className="text-muted-foreground">
                    I handle platform migrations and API integrations (Stripe, Mailchimp, OpenAI), 
                    making sure data moves cleanly and systems stay reliable during transitions.
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
                  <h4 className="font-semibold text-lg">Live Systems & Support</h4>
                  <p className="text-muted-foreground">
                    I work in production environments, adding features, resolving issues, and maintaining reliability as usage scales
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
