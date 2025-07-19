import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in machine learning and data science
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl text-foreground flex items-center gap-3 mb-2">
                    <Building className="h-6 w-6 text-primary" />
                    Machine Learning Intern
                  </CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    Arch Technologies
                  </CardDescription>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Apr 2025 - May 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Lahore, Pakistan
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Gained hands-on experience in machine learning and data science through practical projects 
                  and real-world applications.
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Projects & Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Developed time series forecasting models to predict future trends and patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Built and optimized house price prediction models using regression techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Implemented image classification algorithms for computer vision applications</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {["Machine Learning", "Time Series", "Computer Vision", "Data Analysis", "Python"].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;