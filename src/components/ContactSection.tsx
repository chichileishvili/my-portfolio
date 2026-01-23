import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I'm always open to discussing new projects, opportunities, or just having a chat.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/chichileishvili"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/giorgi-tchitchileishvili"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
