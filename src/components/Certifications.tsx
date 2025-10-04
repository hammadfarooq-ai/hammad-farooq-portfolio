import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, Shield, Star, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Microsoft AI & ML Engineering",
    issuer: "Microsoft",
    description: "Professional certification in AI and machine learning engineering practices",
    icon: "🚀",
    color: "from-sky-500 to-blue-500",
    bgColor: "from-sky-50 to-blue-50",
    certificateUrl: "https://www.coursera.org/account/accomplishments/professional-cert/QFL9NO24AM7X",
    level: "Professional",
    featured: true
  },
  {
    title: "Statistics with Python",
    issuer: "University of Michigan",
    description: "Comprehensive specialization covering statistical analysis and data science with Python",
    icon: "📊",
    color: "from-fuchsia-500 to-pink-500",
    bgColor: "from-fuchsia-50 to-pink-50",
    certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/AXVDK22Y3XT4",
    level: "Specialization",
    featured: true
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    description: "Professional certification covering data analysis techniques, tools, and best practices",
    icon: "📈",
    color: "from-lime-500 to-green-500",
    bgColor: "from-lime-50 to-green-50",
    certificateUrl: "https://www.coursera.org/account/accomplishments/professional-cert/D32XJ0I0RNJ4",
    level: "Professional",
    featured: true
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    description: "Comprehensive course covering ML algorithms, Python libraries, and practical implementations",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    certificateUrl: "https://courses.cognitiveclass.ai/certificates/cba3b93fe7d24f0d98fd7604a95a6348",
    level: "Course",
    featured: false
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM", 
    description: "Advanced techniques for creating impactful visualizations using Python libraries",
    icon: "📊",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    certificateUrl: "https://courses.cognitiveclass.ai/certificates/bef61b1196af4d22b859bc323d415fe0",
    level: "Course",
    featured: false
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    description: "Foundational concepts and practical applications in machine learning",
    icon: "🧠",
    color: "from-teal-500 to-cyan-500",
    bgColor: "from-teal-50 to-cyan-50",
    certificateUrl: "https://www.kaggle.com/learn/certification/hammadfarooq470/intro-to-machine-learning",
    level: "Course",
    featured: false
  },
  {
    title: "Intro to Data Science",
    issuer: "Cisco",
    description: "Core principles and methodologies in data science and analytics",
    icon: "📈",
    color: "from-rose-500 to-pink-500",
    bgColor: "from-rose-50 to-pink-50",
    certificateUrl: "https://www.credly.com/badges/ad3d79b4-a71c-4a99-b0bc-6411bfbf4a8a",
    level: "Course",
    featured: false
  }
];

const Certifications = () => {
  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-lime-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-fuchsia-600 to-lime-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and continuous learning achievements from industry-leading organizations
          </p>
        </div>

        {/* Featured Certifications - Hero Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-6 w-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-foreground">Featured Certifications</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCerts.map((cert, index) => (
              <Card 
                key={index}
                className={`group relative bg-gradient-to-br ${cert.bgColor} dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-lg border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Trophy className="h-3 w-3" />
                  FEATURED
                </div>
                
                {/* Glowing orb */}
                <div className={`absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full`}>
                          {cert.level}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className={`text-base font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {cert.description}
                  </p>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${cert.color} hover:shadow-xl transition-all duration-300 text-white border-0 group-hover:scale-105`}
                    onClick={() => window.open(cert.certificateUrl, '_blank')}
                    disabled={cert.certificateUrl === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Certifications - Compact Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Additional Certifications</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCerts.map((cert, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-to-br ${cert.bgColor} dark:from-slate-800/60 dark:to-slate-700/60 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{animationDelay: `${(index + 3) * 0.1}s`}}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full`}>
                      {cert.level}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`w-full border-2 hover:bg-gradient-to-r hover:${cert.color} hover:text-white hover:border-transparent transition-all duration-300`}
                    onClick={() => window.open(cert.certificateUrl, '_blank')}
                    disabled={cert.certificateUrl === '#'}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-xl border border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5</div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/20 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
