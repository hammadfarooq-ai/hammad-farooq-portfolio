import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Titanic Survival Prediction",
    description: "Machine learning project predicting passenger survival on the Titanic using Random Forest classifier. Includes data exploration, feature engineering with one-hot encoding, and Kaggle competition submission workflow with comprehensive data analysis.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Kaggle API"],
    githubUrl: "https://github.com/hammadfarooq-ai/Titanic-Survival-Prediction",
    demoUrl: "#"
  },
  {
    title: "Covid-19 Data Analysis Project",
    description: "Comprehensive vaccination data analysis project focusing on processing Excel datasets, cleaning inconsistent data, and generating interactive visualizations for gender-based and age-specific vaccination trends. Includes data transformation and CSV export functionality.",
    tech: ["Python", "Pandas", "Plotly", "Excel", "CSV", "Data Visualization"],
    githubUrl: "https://github.com/hammadfarooq-ai/Covid-19-Data-Analysis-Project",
    demoUrl: "#"
  },
  {
    title: "Loan Prediction Model",
    description: "Developed a machine learning model to predict loan default risk using comprehensive data analysis and feature engineering. Implemented multiple algorithms for accurate risk assessment in financial lending.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/hammadfarooq-ai/loan_default_prediction",
    demoUrl: "#"
  },
  {
    title: "House Price Prediction",
    description: "Built a regression model using Scikit-learn and Pandas to predict house prices based on various features. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    githubUrl: "https://github.com/hammadfarooq-ai/House-Price-Prediction-",
    demoUrl: "#"
  },
  {
    title: "MNIST Digit Classification & Custom Dataset",
    description: "Developed classifiers using TensorFlow & Keras for both MNIST digit recognition and custom dataset classification. Achieved high accuracy with deep learning techniques.",
    tech: ["TensorFlow", "Keras", "Deep Learning", "CNN"],
    githubUrl: "https://github.com/hammadfarooq-ai/Classification-Fundamentals-and-MNIST-Digit-Recognition",
    demoUrl: "#"
  },
  {
    title: "Brain Tumor Detection",
    description: "Used YOLO & SAM for object detection and segmentation to identify brain tumors in medical images. Implemented state-of-the-art computer vision algorithms for healthcare applications.",
    tech: ["YOLO", "SAM", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/hammadfarooq-ai/Brain_Tumor_Detection",
    demoUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full mb-8">
            <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
            <span className="text-gradient-primary font-bold text-lg">Portfolio Showcase</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-gradient-primary leading-tight">
            Featured Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            A showcase of my work in machine learning, data science, and AI development
          </p>
        </div>
        
        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-8 animate-fade-in hover-lift"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <Card className="glass-card hover:shadow-elevated transition-all duration-500 group overflow-hidden border-2 border-primary/20 hover:border-primary/50">
                {/* Gradient header */}
                <div className={`h-2 ${index % 3 === 0 ? 'bg-gradient-primary' : index % 3 === 1 ? 'bg-gradient-secondary' : 'bg-gradient-tertiary'}`}></div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          techIndex % 3 === 0 
                            ? 'bg-primary/20 text-primary border border-primary/30' 
                            : techIndex % 3 === 1 
                            ? 'bg-secondary/20 text-secondary border border-secondary/30'
                            : 'bg-tertiary/20 text-tertiary border border-tertiary/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 glass-button border-2 border-secondary/30 hover:border-secondary hover:shadow-secondary transition-all duration-300 rounded-xl"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Code
                    </Button>
                    
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-primary hover:scale-105 transition-all duration-300 rounded-xl"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;