import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Engineering Intern',
      company: 'AidenAI Inc.',
      period: 'May 2025 – August 2025',
      location: 'Princeton, NJ',
      description: [
        'Built a 4-agent Development Agent system using LangGraph and Hugging Face to generate Unqork UI components from natural language prompts, reducing dev time by 60%. ',
        'Developed a Vite + React frontend for real-time, chat-based interactions. ',
        'Implemented FastAPI streaming backend with AsyncIO, achieving <200 ms latency. ',
        'Integrated 30+ tools using Model Context Protocol (MCP) for dynamic tool selection. ',
        'Designed role-specific prompts to improve LLM output reliability. ',
        'Managed session memory using PostgreSQL for persistent and short-term state. ',
        'Orchestrated agent logic using LangGraph’s state-passing model. ',
        'Led bi-weekly demos and incorporated feedback into agent improvements. '
      ],
      technologies: ['LangGraph', 'React', 'TypeScript', 'FastAPI', 'AsyncIO', 'Hugging Face', 'PostgreSQL', 'Vite', 'MCP']
    },
    {
      title: 'ML Research Assistant',
      company: 'UW Madison College of Engineering',
      period: 'Sept. 2024 – Present',
      location: 'Madison, WI',
      description: [
        'Built MoE-based image classification models in PyTorch on ImageNet and CIFAR-100. ',
        'Automated 200+ training experiments with Weights & Biases tracking. ',
        'Improved out-of-distribution accuracy by 5% through expert selection tuning. ',
        'Explored LLM-style routing in vision-based Mixture-of-Experts models.'
      ],
      technologies: ['PyTorch', 'Data Science', 'Machine Learning', 'Weights & Biases', 'Mixture of Experts']
    },
    {
      title: 'Artificial Intelligence Intern',
      company: 'Wisconsin Institute for Discovery',
      period: 'Mar. 2024 – Dec. 2024',
      location: 'Madison, WI',
      description: [
        'Performed PCA and statistical analysis on urinary tract simulation data. ',
        'Identified 5 most predictive features from 30+ variables. ',
        'Created a Python data exploration toolkit, reducing graphing effort by 40%. ',
        'Presented clinical findings to lab members and faculty. '
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'PCA', 'Statistics']
    },
    {
      title: 'Information Technology Specialist',
      company: 'Division of Information Technology (DoIT)',
      period: 'Jun. 2024 – Apr. 2025',
      location: 'Madison, WI',
      description: [
        'Resolved Cisco VoIP support issues for ~12 customers weekly via Cherwell. ',
        'Closed ~570 tickets, ensuring prompt and effective technical support.'
      ],
      technologies: ['Cisco VoIP', 'Cherwell', 'Customer Support']
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