import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Database, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI Engineering',
      icon: Code, // use appropriate icon import
      skills: [
        { name: 'LangGraph', level: 95 },
        { name: 'Hugging Face', level: 85 },
        { name: 'MCP (Model Context Protocol)', level: 90 },
        { name: 'Prompt Engineering', level: 95 }
      ]
    },
    {
      title: 'Data Science',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Pandas/Numpy', level: 95 },
        { name: 'Matplotlib/Seaborn', level: 80 },
        { name: 'SciKit Learn', level: 80 }
      ]
    },
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React/Vite', level: 80 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Tailwind', level: 80 }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: [
        { name: 'Java', level: 95 },
        { name: 'FastAPI', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'AsyncIO', level: 75 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 90 }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Webpack/Vite', level: 80 },
        { name: 'Jest/Testing', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels, 
            built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-elegant transition-smooth group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground group-hover:text-primary transition-smooth">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <Icon size={20} className="text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;