import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building, Code, Trophy, Zap, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Kaggle Contributor",
    company: "Kaggle · Self-employed",
    period: "May 2025 - Present",
    duration: "Ongoing",
    location: "Global (Remote)",
    description: "Contributing to the global data science community through comprehensive projects, competitions, and educational content on Kaggle platform.",
    achievements: [
      "Created multiple Kaggle Notebooks showcasing projects in data analysis, visualization, and machine learning",
      "Participated in Kaggle Competitions, applying algorithms like regression, classification, and deep learning for real-world datasets",
      "Contributed to Kaggle Discussions, collaborating with the global data science community to share insights and solutions",
      "Completed Kaggle courses in Machine Learning, Data Visualization, Python, and SQL, while actively strengthening foundations in AI and ML"
    ],
    skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Python", "SQL", "Deep Learning", "Regression", "Classification"],
    icon: Zap,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    bgGradient: "from-orange-50 via-red-50 to-pink-50"
  },
  {
    title: "Python Programming Intern",
    company: "CodeAlpha",
    period: "Oct 2024 - Jan 2025",
    duration: "4 months",
    location: "India (Remote)",
    description: "Strengthened coding skills and enhanced problem-solving abilities through real-world Python projects during a 4-month intensive internship program.",
    achievements: [
      "Built a high-efficiency Python script for generating the Fibonacci series",
      "Designed and deployed a student grade tracker for managing and calculating academic performance",
      "Strengthened coding skills and enhanced problem-solving abilities through real-world projects"
    ],
    skills: ["Python", "Algorithm Design", "Data Structures", "Problem Solving", "Software Development"],
    icon: Code,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    bgGradient: "from-cyan-50 via-blue-50 to-indigo-50"
  },
  {
    title: "Fellow",
    company: "Dev Weekends",
    period: "Jun 2025 - Aug 2025",
    duration: "3 months",
    location: "Pakistan (Remote)",
    description: "Focused fellowship program on mastering Data Structures & Algorithms and C++ programming, with emphasis on competitive programming and technical skill development.",
    achievements: [
      "Focused on mastering Data Structures & Algorithms (DSA) and C++",
      "Applied problem-solving techniques to tackle competitive programming challenges",
      "Expanded technical skills, which contributed to securing this role (thanks to LinkedIn)"
    ],
    skills: ["C++", "Data Structures", "Algorithms", "Competitive Programming", "Problem Solving", "LinkedIn Networking"],
    icon: Trophy,
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    bgGradient: "from-emerald-50 via-teal-50 to-green-50"
  },
  {
    title: "Machine Learning Intern",
    company: "Arch Technologies",
    period: "Apr 2025 - May 2025",
    duration: "2 months",
    location: "Islamabad, Pakistan",
    description: "Gained hands-on experience in machine learning and data science through practical projects and real-world applications.",
    achievements: [
      "Developed time series forecasting models to predict future trends and patterns",
      "Built and optimized house price prediction models using regression techniques",
      "Implemented image classification algorithms for computer vision applications"
    ],
    skills: ["Machine Learning", "Time Series", "Computer Vision", "Data Analysis", "Python"],
    icon: Sparkles,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-slate-50 via-zinc-100 to-stone-100 dark:from-zinc-900 dark:via-slate-900 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-emerald-600 to-violet-600 bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey through cutting-edge technology roles, building innovative solutions and expanding expertise
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-emerald-500 to-violet-500 rounded-full hidden lg:block"></div>
          
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`relative mb-16 lg:mb-24 animate-fade-in`} style={{animationDelay: `${index * 0.3}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-20 hidden lg:block shadow-lg"></div>
                
                {/* Experience card */}
                <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                  <div className={`group relative ${isLeft ? 'lg:-mr-6' : 'lg:-ml-6'}`}>
                    {/* Arrow pointing to timeline */}
                    <div className={`absolute top-8 ${isLeft ? 'right-0 border-l-primary' : 'left-0 border-r-primary'} w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${isLeft ? 'border-l-8' : 'border-r-8'} hidden lg:block`}></div>
                    
                    <Card className={`bg-gradient-to-br ${exp.bgGradient} dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50 backdrop-blur-lg border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden relative`}>
                      {/* Floating icon */}
                      <div className={`absolute -top-6 ${isLeft ? 'right-6' : 'left-6'} w-12 h-12 bg-gradient-to-r ${exp.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Decorative pattern */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.gradient} opacity-10 rounded-bl-full`}></div>
                      
                      <CardHeader className="pb-4 pt-8">
                        <div className="flex flex-col space-y-3">
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                            {exp.company}
                          </CardDescription>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-4 text-lg">Key Achievements:</h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-3 group/item">
                                  <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200`}></div>
                                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-4 text-lg">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span 
                                  key={skillIndex}
                                  className={`px-4 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-sm font-medium hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl cursor-default`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;