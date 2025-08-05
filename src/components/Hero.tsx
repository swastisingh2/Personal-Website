import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import headshotImage from '@/assets/headshot.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <img
              src={headshotImage}
              alt="Professional headshot"
              className="w-full h-full object-cover rounded-full shadow-elegant border-4 border-accent"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Sarah</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create beautiful, functional digital experiences that make a difference. 
            Passionate about clean code, intuitive design, and solving complex problems.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-primary text-primary hover:bg-accent transition-smooth"
          >
            Learn More
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Mail, href: 'mailto:sarah@example.com', label: 'Email' },
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-card hover:bg-accent transition-smooth shadow-soft hover:shadow-elegant"
              aria-label={label}
            >
              <Icon size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;