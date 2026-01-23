import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-accent" />
          Experience
        </h2>

        <div className="space-y-8">
          {/* Job Card */}
          <div className="relative pl-8 border-l-2 border-accent/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
            
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold text-foreground">Software Engineer</h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Jul 2023 – Present</span>
                </div>
              </div>
              
              <p className="text-accent font-medium mb-4">Suada · Remote</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Developed and maintained production React applications using React.js, Hooks, Redux, and TypeScript
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Integrated and optimized GraphQL APIs using Apollo Client
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Published Suada's component library as a separate public repository for global reuse
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      Contributed to Suada's deployment to Microsoft Marketplace and Azure ecosystem
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Major Features Delivered</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Student-to-student messaging system",
                      "Complex analytics services & dashboards",
                      "Theme Customization System",
                      "Quiz functionality with scoring",
                      "Course Pinning feature",
                      "Performance optimizations",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
