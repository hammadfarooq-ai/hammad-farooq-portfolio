import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { TwitterIcon as X } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/5d0edc09-0a72-4e82-bcc1-887e894d55f3.png"
              alt="Hammad Farooq"
              className="w-40 h-40 mx-auto rounded-full shadow-glow border-4 border-primary/30 hover:border-primary/60 transition-all duration-300 animate-glow"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Hammad Farooq
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            AI/ML Engineer & Data Scientist
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring AI/ML Engineer with hands-on experience in building ML models and real-world AI projects. 
            Currently pursuing a BS in Data Science at Virtual University of Pakistan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4"
              onClick={() => window.open('https://github.com/hammadfarooq-ai', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/30 hover:border-accent hover:bg-accent/10 px-8 py-4"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/lovable-uploads/a241e662-85f2-44a3-820f-31b01c146171.png';
                link.download = 'Hammad_Farooq_Resume.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/hammadfarooq-ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/hammadfarooq-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://x.com/HammadFarooq470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <X className="h-6 w-6" />
            </a>
            <a 
              href="mailto:hammadfarooq470@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div 
            className="cursor-pointer animate-bounce"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;