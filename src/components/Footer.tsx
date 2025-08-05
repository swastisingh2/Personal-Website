import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or just chat about technology and design.
          </p>
          
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            <Mail size={16} className="mr-2" />
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: Mail, href: 'mailto:sarah@example.com', label: 'Email' },
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-background hover:bg-accent transition-smooth shadow-soft hover:shadow-elegant"
              aria-label={label}
            >
              <Icon size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
          ))}
        </div>

        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-primary" /> by Sarah • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;