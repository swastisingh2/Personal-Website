import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-semibold text-foreground">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-smooth capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="py-4 space-y-2">
              {['about', 'experience', 'projects', 'skills'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-smooth capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;