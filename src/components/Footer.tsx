const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Giorgi Tchitchileishvili. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
