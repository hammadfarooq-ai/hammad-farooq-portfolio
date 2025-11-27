import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, X } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#150134] to-[#1a0a2e]"></div>
      
      {/* Large Glowing Moon */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-[#e0e0e0] via-[#b0b0b0] to-transparent rounded-full opacity-40 blur-sm animate-float-gentle"></div>
      <div className="absolute top-24 right-24 w-56 h-56 bg-[#f5f5f5] rounded-full opacity-30 shadow-[0_0_100px_rgba(255,255,255,0.4)]"></div>
      
      {/* Nebula Clouds - Multiple Layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Purple nebula */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-primary/25 via-primary/8 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-50" style={{ animationDelay: '2s', animationDuration: '80s' }}></div>
        
        {/* Blue/Cyan nebula */}
        <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-radial from-secondary/25 via-secondary/10 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-60" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[550px] h-[550px] bg-gradient-radial from-secondary/20 via-secondary/8 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-50" style={{ animationDelay: '6s', animationDuration: '90s' }}></div>
        
        {/* Pink/Magenta nebula */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-radial from-tertiary/20 via-tertiary/8 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-50" style={{ animationDelay: '8s', animationDuration: '100s' }}></div>
        
        {/* Teal accent nebula */}
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-radial from-accent/20 via-accent/8 to-transparent rounded-full blur-3xl animate-cosmic-drift opacity-45" style={{ animationDelay: '10s', animationDuration: '85s' }}></div>
      </div>
      
      {/* Distant Galaxies */}
      <div className="absolute top-40 left-40 w-32 h-32 opacity-20">
        <div className="w-full h-full bg-gradient-conic from-primary/40 via-transparent to-primary/40 rounded-full blur-md animate-spin" style={{ animationDuration: '60s' }}></div>
      </div>
      <div className="absolute bottom-32 right-32 w-24 h-24 opacity-15">
        <div className="w-full h-full bg-gradient-conic from-secondary/40 via-transparent to-secondary/40 rounded-full blur-md animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}></div>
      </div>
      
      {/* Shooting Stars Enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-20 bg-gradient-to-b from-white to-transparent animate-shooting-star opacity-0"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-star to-transparent animate-shooting-star opacity-0" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/2 left-1/2 w-1 h-16 bg-gradient-to-b from-white to-transparent animate-shooting-star opacity-0" style={{ animationDelay: '10s' }}></div>
      </div>
      
      {/* Floating Cosmic Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-star rounded-full animate-float-gentle opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float-gentle opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-secondary rounded-full animate-float-gentle opacity-70" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-tertiary rounded-full animate-float-gentle opacity-60" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-star rounded-full animate-float-gentle opacity-70" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-accent rounded-full animate-float-gentle opacity-60" style={{ animationDelay: '5s' }}></div>
      </div>
      
      {/* Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
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
