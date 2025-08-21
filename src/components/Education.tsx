import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

const educationData = [
  {
    institution: "Virtual University of Pakistan",
    degree: "Bachelor of Science - BS, Data Science",
    period: "2021 - 2025",
    grade: "A",
    location: "Lahore, Pakistan",
    description: "Comprehensive program focusing on data science fundamentals, machine learning, statistical analysis, and practical applications in real-world scenarios.",
    subjects: ["Machine Learning", "Statistics", "Data Mining", "Python Programming", "Database Systems", "Research Methodology"],
    icon: GraduationCap,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50"
  },
  {
    institution: "Punjab Group Of Colleges",
    degree: "Intermediate in Computer Science (ICS)",
    period: "2019 - 2021",
    grade: "A",
    location: "Punjab, Pakistan",
    description: "Pre-university education with focus on computer science fundamentals, mathematics, and analytical thinking skills.",
    subjects: ["Computer Science", "Mathematics", "Physics", "Programming Fundamentals", "Logic & Reasoning"],
    icon: BookOpen,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 via-teal-50 to-cyan-50"
  },
  {
    institution: "Grammar School System",
    degree: "Matric, Computational Science",
    period: "2017 - 2019",
    grade: "A+",
    location: "Pakistan",
    description: "Foundation education with emphasis on computational sciences and core academic subjects, achieving excellent academic performance.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English", "Urdu"],
    icon: Award,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Academic Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic foundation in data science and computer science, building the knowledge that drives my passion for technology
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full hidden lg:block"></div>
          
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`relative mb-16 lg:mb-24 animate-fade-in`} style={{animationDelay: `${index * 0.3}s`}}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-20 hidden lg:block shadow-lg"></div>
                
                {/* Education card */}
                <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'}`}>
                  <div className={`group relative ${isLeft ? 'lg:-mr-6' : 'lg:-ml-6'}`}>
                    {/* Arrow pointing to timeline */}
                    <div className={`absolute top-8 ${isLeft ? 'right-0 border-l-primary' : 'left-0 border-r-primary'} w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${isLeft ? 'border-l-8' : 'border-r-8'} hidden lg:block`}></div>
                    
                    <Card className={`bg-gradient-to-br ${edu.bgGradient} dark:from-slate-800/50 dark:via-slate-700/50 dark:to-slate-800/50 backdrop-blur-lg border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden relative`}>
                      {/* Floating icon */}
                      <div className={`absolute -top-6 ${isLeft ? 'right-6' : 'left-6'} w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Decorative pattern */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-bl-full`}></div>
                      
                      <CardHeader className="pb-4 pt-8">
                        <div className="flex flex-col space-y-3">
                          <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                            {edu.institution}
                          </CardDescription>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-primary" />
                              <span className="font-semibold">Grade: {edu.grade}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {edu.description}
                        </p>

                        <div>
                          <h4 className="font-semibold text-foreground mb-4 text-lg">Key Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, subjectIndex) => (
                              <span 
                                key={subjectIndex}
                                className={`px-4 py-2 bg-gradient-to-r ${edu.gradient} text-white rounded-full text-sm font-medium hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl cursor-default`}
                              >
                                {subject}
                              </span>
                            ))}
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

export default Education;