import { useState, useMemo } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CodeTutor UI Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/code-tutor-ui.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/react-dashboard.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Volcanic Activity Map",
    description: "Map that tracks global volcanic activity using NASA data",
    image: "/projects/volcanic-activity.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Convo",
    description: "Full stack chat application",
    image: "/projects/convo.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Synova",
    description: "Tech consultancy landing page",
    image: "/projects/synova.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Bookshelf",
    description: "Website that allows users to create reading lists using Google Books API",
    image: "/projects/bookshelf.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Cart UI",
    description: "React UI for carts page of e-commerce store",
    image: "/projects/cart-ui.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Timeline",
    description: "Full stack social media application",
    image: "/projects/timeline.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "E-Commerce",
    description: "Full stack E-Commerce Store",
    image: "/projects/ecommerce-01.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Corso",
    description: "landing page for Corso Training",
    image: "/projects/corso.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Blog Mastery",
    description: "landing page for Blog Mastery",
    image: "/projects/blog-mastery.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Musician Website",
    description: "landing page for Blog Mastery",
    image: "/projects/nova-syndicate.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "Photography Portfolio",
    description: "landing page for Blog Mastery",
    image: "/projects/photography.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// Collect *all unique tags* across all projects
const allTags = [...new Set(projects.flatMap((p) => p.tags))];

export const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter logic
  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  // Paginated slice
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail.
        </p>

        {/* ---- TAG FILTER BUTTONS ---- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-3 py-1 rounded-full border text-sm ${
              activeTag === "All"
                ? "bg-primary text-white"
                : "bg-secondary text-secondary-foreground"
            }`}
            onClick={() => {
              setActiveTag("All");
              setVisibleCount(6);
            }}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full border text-sm ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-secondary text-secondary-foreground"
              }`}
              onClick={() => {
                setActiveTag(tag);
                setVisibleCount(6);
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ---- PROJECT CARDS ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- LOAD MORE ---- */}
        {visibleCount < filteredProjects.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="
                  px-4 py-2 
                  text-sm 
                  rounded-full 
                  border border-white/20 
                  text-white/80 
                  hover:bg-white/10 
                  transition
                "
              >
                Load More
              </button>
            </div>
          )}


        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AdamsCode782"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
