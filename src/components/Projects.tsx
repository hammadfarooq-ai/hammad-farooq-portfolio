import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";

const machineLearningProjects = [
  {
    title: "Titanic Survival Prediction",
    description: "Machine learning project predicting passenger survival on the Titanic using Random Forest classifier. Includes data exploration, feature engineering with one-hot encoding, and Kaggle competition submission workflow with comprehensive data analysis.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "Kaggle API"],
    githubUrl: "https://github.com/hammadfarooq-ai/Titanic-Survival-Prediction"
  },
  {
    title: "Loan Default Prediction",
    description: "Developed a machine learning model to predict loan default risk using comprehensive data analysis and feature engineering. Implemented multiple algorithms for accurate risk assessment in financial lending.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/hammadfarooq-ai/loan_default_prediction"
  },
  {
    title: "Face Detection OpenCV",
    description: "Computer vision project implementing real-time face detection using OpenCV library. Features advanced image processing techniques and machine learning algorithms for accurate facial recognition in various lighting conditions.",
    tech: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Machine Learning"],
    githubUrl: "https://github.com/hammadfarooq-ai/Face-Detection-OpenCV"
  },
  {
    title: "House Price Prediction",
    description: "Built a regression model using Scikit-learn and Pandas to predict house prices based on various features. Implemented data preprocessing, feature engineering, and model evaluation techniques.",
    tech: ["Python", "Scikit-learn", "Pandas", "Regression"],
    githubUrl: "https://github.com/hammadfarooq-ai/House-Price-Prediction-"
  },
  {
    title: "MNIST Digit Classification & Custom Dataset",
    description: "Developed classifiers using TensorFlow & Keras for both MNIST digit recognition and custom dataset classification. Achieved high accuracy with deep learning techniques.",
    tech: ["TensorFlow", "Keras", "Deep Learning", "CNN"],
    githubUrl: "https://github.com/hammadfarooq-ai/Classification-Fundamentals-and-MNIST-Digit-Recognition"
  },
  {
    title: "Brain Tumor Detection",
    description: "Used YOLO & SAM for object detection and segmentation to identify brain tumors in medical images. Implemented state-of-the-art computer vision algorithms for healthcare applications.",
    tech: ["YOLO", "SAM", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/hammadfarooq-ai/Brain_Tumor_Detection"
  }
];

const dataScienceProjects = [
  {
    title: "Covid-19 Data Analysis Project",
    description: "Comprehensive vaccination data analysis project focusing on processing Excel datasets, cleaning inconsistent data, and generating interactive visualizations for gender-based and age-specific vaccination trends. Includes data transformation and CSV export functionality.",
    tech: ["Python", "Pandas", "Plotly", "Excel", "CSV", "Data Visualization"],
    githubUrl: "https://github.com/hammadfarooq-ai/Covid-19-Data-Analysis-Project"
  },
  {
    title: "Life Expectancy Data Analysis",
    description: "Comprehensive data analysis project examining global life expectancy trends using statistical methods and data visualization. Explores correlations between various health, economic, and social factors affecting life expectancy worldwide.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis"],
    githubUrl: "https://github.com/hammadfarooq-ai/Life_Expectancy_Data_Analysis"
  }
];

const aiProjects = [
  {
    title: "LangChain AI Chatbot Lab",
    description: "Advanced AI chatbot implementation using LangChain framework. Features natural language processing, conversation memory, and integration with various AI models for intelligent responses.",
    tech: ["Python", "LangChain", "AI", "NLP", "Chatbot"],
    githubUrl: "https://github.com/hammadfarooq-ai/LangChain-AI-Chatbot-Lab"
  },
  {
    title: "Realtime AI Voice Bot",
    description: "Real-time voice interaction AI bot with speech recognition and synthesis capabilities. Features live conversation processing, voice command recognition, and natural language responses.",
    tech: ["Python", "AI", "Speech Recognition", "Voice Synthesis", "Real-time Processing"],
    githubUrl: "https://github.com/hammadfarooq-ai/realtime-ai-voice-bot"
  }
];

const pythonProjects = [
  {
    title: "Snake Game",
    description: "Classic Snake game implementation in Python using Pygame. Features smooth gameplay, score tracking, collision detection, and interactive controls.",
    tech: ["Python", "Pygame", "Game Development"],
    githubUrl: "https://github.com/hammadfarooq-ai/Snake-Game"
  },
  {
    title: "Markdown To HTML Converter",
    description: "Utility tool that converts Markdown files to HTML format with custom styling options. Features syntax highlighting, responsive design, and batch processing capabilities for documentation generation.",
    tech: ["Python", "HTML", "CSS", "Markdown", "File Processing"],
    githubUrl: "https://github.com/hammadfarooq-ai/Md2html"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
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
        
        <Tabs defaultValue="machine-learning" className="w-full max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 glass-card p-2 h-auto mb-12">
            <TabsTrigger 
              value="machine-learning" 
              className="text-base font-semibold py-4 data-[state=active]:bg-gradient-primary data-[state=active]:text-white rounded-xl"
            >
              Machine Learning
            </TabsTrigger>
            <TabsTrigger 
              value="data-science" 
              className="text-base font-semibold py-4 data-[state=active]:bg-gradient-secondary data-[state=active]:text-white rounded-xl"
            >
              Data Science
            </TabsTrigger>
            <TabsTrigger 
              value="ai-projects" 
              className="text-base font-semibold py-4 data-[state=active]:bg-gradient-tertiary data-[state=active]:text-white rounded-xl"
            >
              AI Projects
            </TabsTrigger>
            <TabsTrigger 
              value="python-projects" 
              className="text-base font-semibold py-4 data-[state=active]:bg-gradient-accent data-[state=active]:text-white rounded-xl"
            >
              Python Projects
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="machine-learning">
            <ProjectGrid projects={machineLearningProjects} />
          </TabsContent>
          
          <TabsContent value="data-science">
            <ProjectGrid projects={dataScienceProjects} />
          </TabsContent>
          
          <TabsContent value="ai-projects">
            <ProjectGrid projects={aiProjects} />
          </TabsContent>
          
          <TabsContent value="python-projects">
            <ProjectGrid projects={pythonProjects} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }: { projects: any[] }) => {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="break-inside-avoid mb-8 animate-fade-in hover-lift"
          style={{animationDelay: `${index * 0.2}s`}}
        >
          <Card className="glass-card hover:shadow-elevated transition-all duration-500 group overflow-hidden border-2 border-primary/20 hover:border-primary/50">
            {/* Gradient header */}
            <div className={`h-2 ${index % 4 === 0 ? 'bg-gradient-primary' : index % 4 === 1 ? 'bg-gradient-secondary' : index % 4 === 2 ? 'bg-gradient-tertiary' : 'bg-gradient-accent'}`}></div>
            
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
                      techIndex % 4 === 0 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : techIndex % 4 === 1 
                        ? 'bg-secondary/20 text-secondary border border-secondary/30'
                        : techIndex % 4 === 2
                        ? 'bg-tertiary/20 text-tertiary border border-tertiary/30'
                        : 'bg-accent/20 text-accent border border-accent/30'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full glass-button border-2 border-secondary/30 hover:border-secondary hover:shadow-secondary transition-all duration-300 rounded-xl"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Projects;