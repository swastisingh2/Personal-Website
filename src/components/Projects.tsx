import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Optimized Transit Routing System',
      description:  'Real-time Wisconsin transit routing prototype using Kafka, GTFS, and Dijkstra’s algorithm. Cleaned 1M+ records, reduced data errors by 90%, and enabled dynamic schedule updates across all routes.',
      technologies: ['Python', 'GTFS','Geopandas', 'AWS EC2', 'Google BigQuery', 'Docker', 'GCP', 'Kafka'],
      github: '#',
      featured: true
    },
    {
      title: 'Animify: Prompt-to-Animation Platform',
      description: 'RAG-powered app that converts natural language into SVG/MP4 animations using LangChain, Chroma, and Manim. Built a React-based UI with live previews, parameter controls, and FastAPI endpoints.',
      technologies: [
        'LangChain',
        'React',
        'TypeScript',
        'FastAPI',
        'Manim',
        'Docker',
        'Chroma',
        'JavaScript'
      ],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Purchase Order Processor',
      description: 'Automated purchase order processing with LLMs, async queuing, and real-time monitoring to improve accuracy, speed, and auditability.',
      technologies: [
      'Node.js',
      'Express',
      'BullMQ',
      'Redis',
      'Prometheus',
      'Grafana',
      'Loki',
      'React-Bootstrap',
      'Docker',
      'Postman'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Scene Recognition with LeNet-5',
      description: 'Developed a LeNet-5 CNN in PyTorch for scene classification. Tuned hyperparameters and used profiling tools to boost model accuracy and performance.',
      technologies: [
        'PyTorch',
        'CNN',
        'Model Optimization',
        'Python'
      ],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Music & Flight Explorer Application',
      description: 'Built a Java app combining a song search tool and a flight routing system. Used Red-Black Tree for efficient music search and Dijkstra’s algorithm for optimal flight paths.',
      technologies: [
        'Java',
        'JavaFX',
        'Red-Black Tree',
        'Dijkstra’s Algorithm',
        'JUnit',
        'Git'
      ],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Blog App: Full-Stack Content Platform',
      description: 'Developed a Ruby on Rails blog platform with JWT auth, CRUD APIs, and dynamic user features like image uploads, likes, and comments.',
      technologies: [
        'Ruby',
        'Ruby on Rails',
        'MySQL',
        'Devise',
        'JWT',
        'MVC'
      ],
      github: '#',
      demo: '#',
      featured: false
    }
    
  ];

  const certifications = [
    { name: 'AWS Certified Developer Associate', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'AWS Certified Cloud Practioner', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Unqork Novice Configurator', issuer: 'Unqork', year: '2025' }
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
                
                {/* <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div> */}
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