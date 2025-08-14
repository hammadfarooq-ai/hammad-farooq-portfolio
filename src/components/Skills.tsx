import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Brain, Sparkles, Zap, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C/C++", "SQL"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    description: "Core programming languages for development"
  },
  {
    title: "ML Tools",
    icon: Brain,
    skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "YOLO", "PyTorch"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    description: "Machine learning frameworks and libraries"
  },
  {
    title: "Data Tools",
    icon: Database,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    description: "Data analysis and visualization tools"
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    skills: ["VS Code", "Jupyter Notebook", "Google Colab", "GitHub"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    description: "Development environment and collaboration tools"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-900/20 dark:via-slate-900 dark:to-cyan-900/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Star className="h-5 w-5 text-primary animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-primary font-semibold">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning machine learning, data science, and modern software development
          </p>
        </div>
        
        {/* Floating Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in hover-scale"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <Card className={`relative h-full bg-gradient-to-br ${category.bgColor} dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-lg border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Floating orb */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500`}></div>
                  
                  {/* Glowing border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                  
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="group/skill relative"
                        >
                          <div 
                            className={`px-4 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-foreground rounded-xl text-sm font-medium text-center border border-white/40 hover:bg-gradient-to-r hover:${category.color} hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default`}
                            style={{animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`}}
                          >
                            {skill}
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-[shimmer_0.8s_ease-in-out] rounded-xl"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats or additional visual element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-xl border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">∞</div>
              <div className="text-sm text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;