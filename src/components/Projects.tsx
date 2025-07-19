import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "House Price Prediction",
    description: "Built a regression model using Scikit-learn and Pandas to predict house prices based on various features. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    githubUrl: "https://github.com/hammadfarooq-ai/house-price-prediction",
    demoUrl: "#"
  },
  {
    title: "MNIST Digit Classification & Custom Dataset",
    description: "Developed classifiers using TensorFlow & Keras for both MNIST digit recognition and custom dataset classification. Achieved high accuracy with deep learning techniques.",
    tech: ["TensorFlow", "Keras", "Deep Learning", "CNN"],
    githubUrl: "https://github.com/hammadfarooq-ai/mnist-classification",
    demoUrl: "#"
  },
  {
    title: "Brain Tumor Detection",
    description: "Used YOLO & SAM for object detection and segmentation to identify brain tumors in medical images. Implemented state-of-the-art computer vision algorithms for healthcare applications.",
    tech: ["YOLO", "SAM", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/hammadfarooq-ai/brain-tumor-detection",
    demoUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in machine learning, data science, and AI development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
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