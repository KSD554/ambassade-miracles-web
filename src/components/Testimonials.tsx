import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Quote, Users, TrendingUp, Heart, Shield, Cross, Sparkles, MapPin, Phone, Globe, Mail, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Kouassi",
      role: "Membre depuis 3 ans",
      text: "Grâce aux prières puissantes de cette église, j'ai vu ma situation professionnelle se transformer complètement. Les combats que je menais depuis des années ont trouvé leur solution.",
      rating: 5
    },
    {
      name: "Jean-Baptiste Yao",
      role: "Nouveau converti",
      text: "L'accueil chaleureux et les enseignements profonds du Bishop m'ont aidé à comprendre ma destinée. Je recommande vivement cette église à tous ceux qui cherchent Dieu.",
      rating: 5
    },
    {
      name: "Fatou Traoré",
      role: "Famille fidèle",
      text: "Ma famille et moi avons expérimenté des miracles extraordinaires. Les 5 semaines de prières ont marqué un tournant dans notre vie spirituelle et matérielle.",
      rating: 5
    },
    {
      name: "David Kouadio",
      role: "Jeune membre",
      text: "Cette église m'a appris à prier avec autorité et à croire en mes rêves. Aujourd'hui, je vois la main de Dieu dans tous les aspects de ma vie.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "92%",
      label: "Recommandent l'église",
      description: "Taux de satisfaction exceptionnellement élevé"
    },
    {
      icon: TrendingUp,
      number: "500+",
      label: "Témoignages de miracles",
      description: "Transformations documentées chaque année"
    },
    {
      icon: Heart,
      number: "15+",
      label: "Années de ministère",
      description: "Service fidèle à la communauté"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Enseignement biblique",
      description: "Fondé sur la Parole de Dieu"
    }
  ];

  const faqs = [
    {
      icon: Cross,
      question: "Qui est l'Église Ambassade des Miracles et quelle est sa mission ?",
      answer: "L'Église Ambassade des Miracles est une organisation religieuse située à Cocody, Abidjan. Sa mission est de bâtir des vies, impacter des générations et manifester la gloire de Dieu à travers la foi, la prière et le service communautaire."
    },
    {
      icon: Heart,
      question: "Quels sont les services, cultes et activités proposés et à quels horaires ?",
      answer: "Nous organisons des cultes dominicaux, des veillées de prière, des réunions d'intercession, ainsi que des programmes pour les jeunes et des actions sociales. Horaires détaillés disponibles dans la section Services."
    },
    {
      icon: Users,
      question: "Comment puis-je participer ou rejoindre la communauté ?",
      answer: "Vous pouvez assister à nos cultes en présentiel, vous inscrire à nos programmes via le formulaire en ligne, ou nous rejoindre sur nos réseaux sociaux pour rester connecté."
    },
    {
      icon: MapPin,
      question: "Comment puis-je contacter l'église (adresse, téléphone, formulaire) ?",
      answer: "📍 Adresse : Cocody, Attoban derrière le commissariat du 30ème arrondissement près de la CGRAE, Cocody, Abidjan, Côte d'Ivoire\n📞 Téléphone : 0759200200 / +225 59 20 02 00\n🌐 Site web : bishopomi.org\n📩 Formulaire de contact disponible dans la section Contact."
    },
    {
      icon: CheckCircle,
      question: "Quelles preuves ou témoignages montrent l'impact réel de cette église ?",
      answer: "L'église est recommandée par 92 % des fidèles (273 avis). De nombreux témoignages illustrent des vies transformées, des miracles vécus et une forte dynamique communautaire."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Témoignages & Foire Aux Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment Dieu transforme les vies dans notre communauté 
            et trouvez les réponses à vos questions.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-elegant text-center hover:shadow-gold transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</h3>
                <p className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">{stat.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Ce que disent nos fidèles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-elegant hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Revolutionary Design */}
        <div className="relative">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-40"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping opacity-30"></div>
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            {/* Floating Icon with Orbital Elements */}
            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
              <div className="absolute inset-0 bg-gradient-primary rounded-full animate-spin opacity-20" style={{animationDuration: '8s'}}></div>
              <div className="absolute inset-2 bg-gradient-primary rounded-full animate-spin opacity-30" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              <div className="relative w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold group hover:scale-110 transition-all duration-500">
                <Sparkles className="h-8 w-8 text-primary-foreground animate-pulse" />
                {/* Orbital dots */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold rounded-full animate-ping"></div>
              </div>
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent mb-6 animate-fade-in">
              Questions Divines
            </h3>
            <div className="relative">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explorez les mystères de notre communauté spirituelle à travers une expérience interactive révolutionnaire
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-pulse"></div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Mystical Connection Lines */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"></div>
            
            <Accordion type="single" collapsible className="space-y-8">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="relative group border-none"
                >
                  {/* Mystical Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-gold/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-card/80 backdrop-blur-lg border border-primary/10 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 overflow-hidden group-hover:scale-[1.02] group-hover:border-gold/30">
                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group/trigger">
                      <div className="flex items-center gap-6 w-full">
                        {/* Revolutionary Icon Design */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/trigger:rotate-12 transition-all duration-500 shadow-lg">
                            <faq.icon className="h-8 w-8 text-primary-foreground group-hover/trigger:scale-110 transition-transform duration-300" />
                          </div>
                          {/* Orbiting Micro Elements */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full opacity-0 group-hover/trigger:opacity-100 group-hover/trigger:animate-bounce transition-all duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/trigger:opacity-100 group-hover/trigger:animate-ping transition-all duration-500"></div>
                        </div>
                        
                        {/* Question Text with Gradient */}
                        <div className="flex-1 pr-4">
                          <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover/trigger:from-gold group-hover/trigger:to-primary transition-all duration-500">
                            {faq.question}
                          </span>
                          <div className="w-0 h-0.5 bg-gradient-to-r from-gold to-primary group-hover/trigger:w-full transition-all duration-700 mt-2"></div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-8 pb-8">
                      {/* Answer with Enhanced Typography */}
                      <div className="pl-22 relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -left-16 -top-2 text-6xl text-gold/20 font-serif">"</div>
                        
                        <div className="prose prose-lg max-w-none text-muted-foreground/90 leading-relaxed">
                          {faq.answer.split('\n').map((line, lineIndex) => (
                            <p key={lineIndex} className="mb-3 last:mb-0 group-hover:text-muted-foreground transition-colors duration-300">
                              {line}
                            </p>
                          ))}
                        </div>
                        
                        {/* Decorative Bottom Element */}
                        <div className="flex items-center gap-2 mt-6 opacity-60">
                          <div className="w-8 h-px bg-gradient-to-r from-gold to-transparent"></div>
                          <Cross className="h-3 w-3 text-gold" />
                          <div className="w-8 h-px bg-gradient-to-l from-gold to-transparent"></div>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                  
                  {/* Connection Node for Desktop */}
                  <div className="absolute left-8 top-1/2 w-3 h-3 bg-gradient-primary rounded-full transform -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block shadow-lg"></div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Mystical Footer Decoration */}
          <div className="flex justify-center mt-16 relative">
            <div className="flex items-center gap-4 opacity-60">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-gold animate-pulse"></div>
              <div className="relative">
                <Cross className="h-6 w-6 text-primary animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <Cross className="h-6 w-6 text-gold opacity-20" />
                </div>
              </div>
              <Sparkles className="h-5 w-5 text-gold animate-bounce" />
              <div className="relative">
                <Cross className="h-6 w-6 text-primary animate-pulse" style={{animationDelay: '0.5s'}} />
                <div className="absolute inset-0 animate-ping" style={{animationDelay: '0.5s'}}>
                  <Cross className="h-6 w-6 text-gold opacity-20" />
                </div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary to-gold animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;