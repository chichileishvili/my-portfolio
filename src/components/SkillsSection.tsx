import { Code2 } from "lucide-react";

const skills = {
  "Frontend": [
    "React.js",
    "TypeScript",
    "Redux",
    "Apollo GraphQL",
    "Styled Components",
    "Storybook",
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "NestJS",
    "MongoDB",
    "REST APIs",
    "GraphQL",
  ],
  "Tools & Others": [
    "Socket.io",
    "Git/GitHub",
    "Microservices",
    "Agile workflow",
    "UI/UX Implementation",
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Code2 className="w-8 h-8 text-accent" />
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div
              key={category}
              className="animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-background rounded-full text-sm text-foreground border border-border hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
