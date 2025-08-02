import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    description: "Comprehensive course covering ML algorithms, Python libraries, and practical implementations",
    icon: "🤖",
    color: "primary",
    certificateUrl: "https://courses.cognitiveclass.ai/certificates/cba3b93fe7d24f0d98fd7604a95a6348"
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM", 
    description: "Advanced techniques for creating impactful visualizations using Python libraries",
    icon: "📊",
    color: "accent",
    certificateUrl: "https://courses.cognitiveclass.ai/certificates/bef61b1196af4d22b859bc323d415fe0"
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    description: "Foundational concepts and practical applications in machine learning",
    icon: "🧠",
    color: "primary",
    certificateUrl: "https://www.kaggle.com/learn/certification/hammadfarooq470/intro-to-machine-learning"
  },
  {
    title: "Intro to Data Science",
    issuer: "Cisco",
    description: "Core principles and methodologies in data science and analytics",
    icon: "📈",
    color: "accent",
    certificateUrl: "https://www.credly.com/badges/ad3d79b4-a71c-4a99-b0bc-6411bfbf4a8a"
  },
  {
    title: "Microsoft AI & ML Engineering",
    issuer: "Microsoft",
    description: "Professional certification in AI and machine learning engineering practices",
    icon: "🚀",
    color: "primary",
    certificateUrl: "https://www.coursera.org/account/accomplishments/professional-cert/QFL9NO24AM7X"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <Award className="h-6 w-6 text-accent opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 w-full"
                  onClick={() => window.open(cert.certificateUrl, '_blank')}
                  disabled={cert.certificateUrl === '#'}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;