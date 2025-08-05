import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'CSS3'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google UX Design Certificate', issuer: 'Google', year: '2022' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2022' },
    { name: 'Scrum Master Certified', issuer: 'Scrum Alliance', year: '2021' }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth group h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-bounce">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm">{cert.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;