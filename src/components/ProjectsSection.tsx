import { ExternalLink, FolderGit2, Github } from "lucide-react";

const projects = [
  {
    title: "Jobify App",
    description: "A job-hunting platform with authentication, job tracking, statistics, and filtering. Built with the MERN stack.",
    liveUrl: "https://jobify-app-41eq.onrender.com",
    githubUrl: "https://github.com/chichileishvili/jobify-app",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <FolderGit2 className="w-8 h-8 text-accent" />
          Projects
        </h2>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
