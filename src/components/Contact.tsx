import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Trophy, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hammadfarooq470@gmail.com",
    href: "mailto:hammadfarooq470@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 3450710970",
    href: "tel:+923450710970",
    color: "accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#",
    color: "primary"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hammadfarooq-ai",
    href: "https://www.linkedin.com/in/hammadfarooq-ai/",
    color: "primary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "hammadfarooq-ai",
    href: "https://github.com/hammadfarooq-ai",
    color: "accent"
  },
  {
    icon: Trophy,
    label: "Kaggle",
    value: "hammadfarooq470",
    href: "https://www.kaggle.com/hammadfarooq470",
    color: "primary"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects? Let's discuss opportunities and innovations together.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Hire Me</h3>
                <div className="space-y-4">
                  {contactMethods.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <Card 
                        key={index}
                        className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group cursor-pointer"
                        onClick={() => contact.href !== "#" && window.open(contact.href, contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank')}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="h-6 w-6 text-background" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {contact.label}
                              </p>
                              <p className="text-muted-foreground">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Find Me Online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Card 
                        key={index}
                        className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group cursor-pointer"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full bg-gradient-${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <IconComponent className="h-6 w-6 text-background" />
                              </div>
                              <div>
                                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {social.label}
                                </p>
                                <p className="text-muted-foreground">
                                  @{social.value}
                                </p>
                              </div>
                            </div>
                            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-hero border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you have a specific project in mind or just want to explore possibilities in AI/ML, 
                  I'd love to hear from you. Let's build something amazing together!
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4"
                  onClick={() => window.open('mailto:hammadfarooq470@gmail.com', '_self')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;