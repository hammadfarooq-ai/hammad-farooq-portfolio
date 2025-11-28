import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, X } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10" style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Enhanced Profile Image */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
            <img 
              src={profileImage}
              alt="Hammad Farooq - AI/ML Engineer"
              className="w-48 h-48 mx-auto rounded-full shadow-elevated border-4 border-primary/40 hover:border-primary/80 transition-all duration-500 hover:scale-105 relative z-10 glass-card object-cover"
            />
          </div>

          {/* Modern heading with enhanced typography */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-gradient-primary leading-tight tracking-tight neon-text">
            Hammad Farooq
          </h1>
          
          <div className="mb-6">
            <p className="text-3xl md:text-4xl font-bold text-gradient-secondary mb-4">
              AI/ML Engineer & Data Scientist
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Aspiring AI/ML Engineer with hands-on experience in building ML models and real-world AI projects. 
            Currently pursuing a BS in Data Science at Virtual University of Pakistan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="cosmic-button px-10 py-6 text-lg font-semibold rounded-2xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-3 h-6 w-6" />
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-button hover:shadow-secondary hover:scale-105 transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-2xl border-2 border-secondary/30 hover:border-secondary"
              onClick={() => window.open('https://github.com/hammadfarooq-ai', '_blank')}
            >
              <Github className="mr-3 h-6 w-6" />
              View Projects
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="glass-button hover:shadow-tertiary hover:scale-105 transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-2xl border-2 border-tertiary/30 hover:border-tertiary"
              onClick={() => window.open('https://drive.google.com/file/d/1yn2fNIYOUaIHmlCKfIbiBnxA6HCHWUDX/view?usp=sharing', '_blank')}
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://www.linkedin.com/in/hammadfarooq-ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="space-card p-4 rounded-2xl hover:scale-110 transform transition-all duration-300 group"
            >
              <Linkedin className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/hammadfarooq-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="space-card p-4 rounded-2xl hover:scale-110 transform transition-all duration-300 group"
            >
              <Github className="h-7 w-7 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
            <a 
              href="https://x.com/HammadFarooq470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="space-card p-4 rounded-2xl hover:scale-110 transform transition-all duration-300 group"
            >
              <X className="h-7 w-7 text-muted-foreground group-hover:text-tertiary transition-colors" />
            </a>
            <a 
              href="mailto:hammadfarooq470@gmail.com"
              className="space-card p-4 rounded-2xl hover:scale-110 transform transition-all duration-300 group"
            >
              <Mail className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
          
          {/* Enhanced Scroll indicator */}
          <div 
            className="cursor-pointer animate-bounce hover:scale-125 transition-transform duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="space-card p-4 rounded-full pulse-glow">
              <ArrowDown className="h-8 w-8 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
