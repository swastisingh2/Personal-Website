import { Card, CardContent } from '@/components/ui/card';
import { Heart, Coffee, Code, Palette } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, efficient code' },
    { icon: Palette, title: 'Data', description: 'Finding Clarity in messy patterns' },
    { icon: Coffee, title: 'Coffee', description: 'Fuel for late-night coding sessions' },
    { icon: Heart, title: 'Impact', description: 'Building solutions that matter' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
            Hello! I’m Swasti, and I love building things that work and matter. ✨
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
              I'm a senior at UW–Madison, double majoring in Computer Science and Data Science. 
              I’m especially drawn to ideas at the edge of engineering and AI—agentic systems, automation, and tools that solve real-world problems with elegance and impact.
              </p>
              
              <p>
              I really enjoy building things that are actually useful—tools or systems that make someone’s life a little easier or more efficient. 
              I'm especially drawn to engineering and data problems that need both structure and creativity. 
              I’ve found myself loving the process of figuring things out, whether that’s training AI models to understand the world more like humans, analyzing messy real-world data, or designing agents that can write and reason. 
              I’m passionate about using code to solve open-ended problems, the kind where there’s no clear path at first and you get to explore what’s possible.
              </p>
              
              <p>
              When I’m not writing code, I’m usually writing poems or dancing. 
              I love stories and movement—two things that have nothing to do with engineering, but somehow help me think more clearly.
              This site is a little window into what I’ve been building, learning, and messing around with. Thanks for stopping by!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {interests.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;