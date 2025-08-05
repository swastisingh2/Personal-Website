import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Database, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'CSS/SCSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Adobe Creative Suite', level: 75 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'Linux', level: 75 }
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
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Team Leadership', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Agile/Scrum', level: 80 }
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