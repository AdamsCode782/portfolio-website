import { useState, useMemo } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description:
      "A modern analytics dashboard built with React and Tailwind, offering real-time charts, clean navigation, and responsive data visualization components.",
    image: "/projects/react-dashboard.png",
    tags: ["React", "Tailwind CSS", "Recharts", "JavaScript", "Framer Motion"],
    demoUrl: "https://react-admin-dashboard-chi-rouge.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/React-Admin-Dashboard",
  },
   {
    id: 2,
    title: "E-Commerce",
    description:
      "A full-stack e-commerce store built with Next.js, complete with Stripe and PayPal integrations, product pages, and responsive storefront design.",
    image: "/projects/ecommerce-01.png",
    tags: ["Next.js", "React", "API Integration", "TypeScript", "Full-Stack"],
    demoUrl: "https://ecommerce-store-nu-black.vercel.app",
    githubUrl: "https://github.com/AdamsCode782/ecommerce-store",
  },
  {
    id: 3,
    title: "WikiMasters",
    description:"A full-stack wiki built with Next.js, Drizzle ORM, Neon Postgres, integrated Markdown editing, and a secure TypeScript-based content architecture.",
    image: "/projects/wikimasters.png",
    tags: ["Next.js", "TypeScript", "Drizzle", "Postgres", "Full-Stack"],
    demoUrl: "https://nextjs-fullstack-wiki.vercel.app",
    githubUrl: "https://github.com/AdamsCode782/nextjs-fullstack-wiki",
  },
  {
    id: 4,
    title: "Issue Tracker",
    description:"High-performance Issue Tracker built with Next.js 15, React 19, Drizzle ORM, and Neon Postgres. Features JWT Auth, Zod validation, and Tailwind CSS.",
    image: "/projects/mode-tracking.png",
    tags: ["Next.js", "TypeScript", "Drizzle", "Postgres", "Full-Stack"],
    demoUrl: "",
    githubUrl: "https://github.com/AdamsCode782/fullstack-nextjs15-issue-tracker",
  },
  {
    id: 5,
    title: "Bookshelf",
    description:
      "A responsive React application that integrates the Google Books API, allowing users to search, save, and manage personalized reading lists.",
    image: "/projects/bookshelf.png",
    tags: ["React", "API Integration", "JavaScript", "CSS"],
    demoUrl: "https://adamscode782.github.io/bookshelf-react/",
    githubUrl: "https://github.com/AdamsCode782/bookshelf-react",
  },
  {
    id: 6,
    title: "Convo",
    description:
      "A production-ready real-time messaging platform featuring authentication, live chat, and a full-stack architecture built with React and Node.js.",
    image: "/projects/convo.png",
    tags: ["React", "Node.js", "MongoDB", "Real-Time", "Full-Stack"],
    demoUrl: "",
    githubUrl: "https://github.com/AdamsCode782/full-stack-chat-app",
  },
  {
    id: 7,
    title: "CodeTutor UI Landing Page",
    description:
      "A polished React and Tailwind landing page designed for an ed-tech platform, featuring clean UI components and fully responsive layouts.",
    image: "/projects/code-tutor-ui.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://code-tutor-ui-ebon.vercel.app",
    githubUrl: "https://github.com/AdamsCode782/code-tutor-ui",
  },
   {
    id: 8,
    title: "Timeline Social Media App",
    description:
      "A full-stack social media application using Next.js, featuring server actions, optimistic updates, authentication, and a fully styled Tailwind UI.",
    image: "/projects/timeline.png",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Postgres",
      "Full-Stack"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/AdamsCode782/timeline-social-app",
  },
  {
    id: 9,
    title: "React 19 Cart UI",
    description:
      "A clean and modern React-based shopping cart interface showcasing reusable components, quantity controls, and responsive layouts.",
    image: "/projects/cart-ui.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://react-shopping-cart-ui.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/react-shopping-cart-ui",
  },
  {
    id: 10,
    title: "Volcanic Activity Map",
    description:
      "A React application that visualizes active volcanic events worldwide using NASA’s EONET API, complete with interactive map markers and real-time updates.",
    image: "/projects/volcanic-activity.png",
    tags: ["React", "API Integration", "JavaScript"],
    demoUrl: "",
    githubUrl: "https://github.com/AdamsCode782/volcano-activity-explorer",
  },
  
  {
    id: 11,
    title: "Synova",
    description:
      "A modern consultancy landing page built with React and styled components, featuring service sections, smooth layout transitions, and contact flows.",
    image: "/projects/synova.png",
    tags: ["Tailwind CSS"],
    demoUrl: "https://financial-services-website-mu.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/financial-services-website",
  },
  
  {
    id: 12,
    title: "Corso",
    description:
      "A clean promotional landing page built with Bootstrap and JavaScript, optimized for responsive marketing layouts and fast load performance.",
    image: "/projects/corso.png",
    tags: ["Bootstrap", "JavaScript"],
    demoUrl: "https://corso-landing-page.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/corso-landing-page",
  },
  
  {
    id: 13,
    title: "Musician Website",
    description:
      "A clean Tailwind CSS marketing site showcasing a music group, featuring responsive layouts, gallery sections, and a modern visual style.",
    image: "/projects/nova-syndicate.png",
    tags: ["Tailwind CSS", "JavaScript"],
    demoUrl: "https://music-group-website.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/music-group-website",
  },
  {
    id: 14,
    title: "Photography Studio",
    description:
      "A visually rich portfolio site powered by Tailwind CSS, showcasing photography collections through responsive grid layouts and smooth UI transitions.",
    image: "/projects/photography.png",
    tags: ["Tailwind CSS", "JavaScript"],
    demoUrl: "https://photography-studio-website.vercel.app",
    githubUrl: "https://github.com/AdamsCode782/photography-studio-website",
  },
  {
    id: 15,
    title: "Architecture Landing Page",
    description:
      "A minimalist architecture-firm landing page built with custom CSS and JavaScript, featuring clean layouts and fast performance.",
    image: "/projects/architecture.png",
    tags: ["JavaScript", "CSS"],
    demoUrl:
      "https://adamscode782.github.io/architecture-landing-website/",
    githubUrl:
      "https://github.com/AdamsCode782/architecture-landing-website",
  },
  {
    id: 16,
    title: "Vera SaaS Landing Page",
    description:
      "A modern SaaS landing page built with Bootstrap and JavaScript, featuring structured sections, responsive layouts, and clean component design.",
    image: "/projects/image.png",
    tags: ["Bootstrap", "JavaScript"],
    demoUrl: "https://vera-landing-page-ten.vercel.app/",
    githubUrl: "https://github.com/AdamsCode782/vera-landing-page",
  },
  {
    id: 17,
    title: "Blog Mastery",
    description:
      "A lightweight Bootstrap marketing page built for fast performance and mobile responsiveness, with simple animations and structured sections.",
    image: "/projects/blog-mastery.png",
    tags: ["Bootstrap", "JavaScript"],
    demoUrl: "https://blog-mastery-landing-page.vercel.app",
    githubUrl: "https://github.com/AdamsCode782/blog-mastery-landing-page",
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
          Featured technical demonstrations. Since much of my professional work remains proprietary, and under NDA, these projects serve as a public look into my engineering process.
        </p>

        {/* ---- TAG FILTER BUTTONS ---- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-3 py-1 rounded-full border text-sm ${
              activeTag === "All"
                ? "bg-primary text-primary-foreground" 
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
                  ? "bg-primary text-primary-foreground" 
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

                {/* <div className="flex justify-between items-center">
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
                </div> */}
                {/* ---- PROJECT LINKS ---- */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <></>
                    )}
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                      title="View Source Code"
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
