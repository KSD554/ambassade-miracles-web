import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, TrendingUp, Heart, Shield } from "lucide-react";

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
      question: "Quels sont les horaires des cultes ?",
      answer: "Mercredis, Jeudis, Vendredis : 17H00-21H00 | Dimanches : 08H00-11H00"
    },
    {
      question: "Y a-t-il un service de transport ?",
      answer: "Oui, nous proposons un transport gratuit. Appelez le +225 0596 085 951 pour plus d'informations."
    },
    {
      question: "Où se trouve l'église exactement ?",
      answer: "Cocody, Attoban derrière le commissariat du 30ème arrondissement, près de la CGRAE, Abidjan."
    },
    {
      question: "Comment participer aux 5 semaines de prières ?",
      answer: "Rejoignez-nous du 03 septembre au 05 octobre 2025. Aucune inscription préalable requise."
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

        {/* FAQ */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Questions Fréquentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-elegant">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;