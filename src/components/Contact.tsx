import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Trophy, ExternalLink, Heart, MessageCircle, Send, Zap, Facebook, BookOpen } from "lucide-react";
import Card3D from "@/components/Card3D";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hammadfarooq470@gmail.com",
    href: "mailto:hammadfarooq470@gmail.com",
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-50 to-cyan-50",
    description: "Let's discuss your next project"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3450710970",
    href: "tel:+923450710970",
    color: "from-lime-500 to-green-500",
    bgColor: "from-lime-50 to-green-50",
    description: "Available for direct conversations"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    description: "Open to remote opportunities"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hammadfarooq-ai",
    href: "https://www.linkedin.com/in/hammadfarooq-ai/",
    color: "from-blue-600 to-blue-500",
    bgColor: "from-blue-50 to-blue-100",
    description: "Professional network & updates"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "hammadfarooq-ai",
    href: "https://github.com/hammadfarooq-ai",
    color: "from-gray-700 to-gray-900",
    bgColor: "from-gray-50 to-gray-100",
    description: "Code repositories & projects"
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "seKure.ds",
    href: "https://web.facebook.com/seKure.ds/",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-100",
    description: "Personal updates & community"
  },
  {
    icon: BookOpen,
    label: "Medium",
    value: "hammadfarooq470",
    href: "https://medium.com/@hammadfarooq470",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    description: "Technical articles & insights"
  },
  {
    icon: Trophy,
    label: "Kaggle",
    value: "hammadfarooq470",
    href: "https://www.kaggle.com/hammadfarooq470",
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-50 to-teal-50",
    description: "Data science competitions"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Heart className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-lime-400 to-rose-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on cutting-edge AI/ML projects? Let's turn your vision into reality with innovative solutions
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Main contact grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {contactMethods.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card3D key={index} intensity={15}>
                      <Card 
                        className={`group bg-gradient-to-br ${contact.bgColor} dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-lg border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in`}
                        style={{animationDelay: `${index * 0.2}s`}}
                        onClick={() => contact.href !== "#" && window.open(contact.href, contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank')}
                      >
                      {/* Floating orb */}
                      <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${contact.color} opacity-20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500`}></div>
                      
                      <CardContent className="p-6 text-center relative z-10">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg mb-2">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3 font-medium">
                          {contact.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {contact.description}
                        </p>
                      </CardContent>
                    </Card>
                    </Card3D>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Zap className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Follow Me</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Card3D key={index} intensity={10}>
                      <Card 
                        className={`group bg-gradient-to-br ${social.bgColor} dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden animate-fade-in`}
                        style={{animationDelay: `${(index + 3) * 0.15}s`}}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                              {social.label}
                            </h4>
                            <p className="text-sm text-muted-foreground font-medium">
                              @{social.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {social.description}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                    </Card3D>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Call to Action - Hero Style */}
          <div className="text-center">
            <Card className="bg-gradient-to-br from-teal-600 via-lime-600 to-rose-600 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400"></div>
              
              <CardContent className="p-12 text-center relative z-10">
                <div className="mb-6">
                  <Send className="h-16 w-16 mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                  Whether you have a groundbreaking idea or need expertise in AI/ML development, 
                  I'm here to transform your vision into cutting-edge solutions. Let's create something extraordinary together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-white/90 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group-hover:scale-105"
                    onClick={() => window.open('mailto:hammadfarooq470@gmail.com', '_self')}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-indigo-600 hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold group-hover:scale-105"
                    onClick={() => window.open('https://www.linkedin.com/in/hammadfarooq-ai/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;