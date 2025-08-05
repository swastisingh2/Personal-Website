import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupX',
      period: '2020 - 2022',
      location: 'Remote',
      description: 'Developed responsive user interfaces for a fintech startup. Collaborated closely with designers to implement pixel-perfect designs and improve user experience metrics by 35%.',
      technologies: ['React', 'Vue.js', 'SCSS', 'Figma', 'JavaScript', 'REST APIs']
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency Plus',
      period: '2019 - 2020',
      location: 'New York, NY',
      description: 'Built custom WordPress themes and plugins for client websites. Optimized website performance and implemented SEO best practices, resulting in 50% improvement in page load times.',
      technologies: ['PHP', 'WordPress', 'jQuery', 'MySQL', 'HTML/CSS', 'SEO']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth group">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;