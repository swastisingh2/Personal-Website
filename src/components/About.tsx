import { Card, CardContent } from '@/components/ui/card';
import { Heart, Coffee, Code, Palette } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, efficient code' },
    { icon: Palette, title: 'Design', description: 'Creating beautiful user experiences' },
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
              Hello! I'm Sarah, a passionate developer who loves creating digital magic ✨
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in full-stack development, I've had the pleasure 
                of working with amazing teams to build products that users truly love. My journey 
                began with a Computer Science degree, but my passion for creating beautiful, 
                functional experiences has taken me far beyond the classroom.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to 
                open source projects, or enjoying a good cup of coffee while sketching out my 
                next big idea. I believe that the best products come from understanding both the 
                technical and human sides of problem-solving.
              </p>
              
              <p>
                I'm always excited about new challenges and opportunities to learn. Whether it's 
                mastering a new framework or collaborating with talented teams, I'm driven by 
                the possibility of creating something meaningful.
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