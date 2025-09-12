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

        {/* FAQ Interactive */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 animate-pulse">
              <Sparkles className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Questions Fréquentes
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez tout ce que vous devez savoir sur notre église et notre communauté spirituelle
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-primary/20 rounded-xl bg-card/50 backdrop-blur-sm shadow-elegant hover:shadow-gold transition-all duration-300 overflow-hidden group"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group-hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <faq.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-primary text-base sm:text-lg pr-4">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground">
                    <div className="pl-16 prose prose-sm max-w-none">
                      {faq.answer.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-gold opacity-70">
              <Cross className="h-4 w-4" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <Sparkles className="h-4 w-4" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <Cross className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;