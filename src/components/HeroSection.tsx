import profilePhoto from "@/assets/profile-photo.jpg";
import { Github, Linkedin, MapPin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-elevated border-4 border-background">
              <img
                src={profilePhoto}
                alt="Giorgi Tchitchileishvili"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full animate-float" />
          </div>

          {/* Info */}
          <div className="text-center md:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
                Software Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Giorgi<br />
                <span className="text-gradient">Tchitchileishvili</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Full-stack engineer with 2.8 years of experience building scalable web applications. 
              Passionate about React, TypeScript, and creating exceptional user experiences.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Tbilisi, Georgia</span>
            </div>

            {/* Social Links & CV Download */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="/Giorgi_Tchitchileishvili_CV.pdf"
                download="Giorgi_Tchitchileishvili_CV.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download CV</span>
              </a>
              <a
                href="https://github.com/chichileishvili"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/giorgi-tchitchileishvili-2a0770249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;