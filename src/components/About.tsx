import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Eye, Target, Crown } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Notre Mission",
      description: "Conduire les âmes vers Christ et les équiper pour remporter les combats spirituels de leur destinée."
    },
    {
      icon: Eye,
      title: "Notre Vision",
      description: "Être une église où les miracles se manifestent quotidiennement et où chaque membre découvre son appel divin."
    },
    {
      icon: Target,
      title: "Nos Valeurs",
      description: "Foi, Intégrité, Excellence, Compassion et Transformation spirituelle pour chaque membre de notre communauté."
    },
    {
      icon: Crown,
      title: "Notre Impact",
      description: "Plus de 92% de nos fidèles témoignent d'une transformation positive dans leur vie spirituelle et personnelle."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            À Propos de l'Église Ambassade des Miracles
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fondée sous l'inspiration divine, notre église est un lieu de transformation 
            où la puissance de Dieu se manifeste dans la vie de chaque membre.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
              S.E Bishop Ouattara Mohamed Idriss
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Homme de Dieu passionné par l'évangélisation et la transformation des vies, 
              Bishop Ouattara Mohamed Idriss dirige l'Église Ambassade des Miracles avec 
              une vision claire : voir chaque membre de l'église équipé pour remporter 
              les combats liés à sa destinée.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              Avec des années d'expérience dans le ministère, il prêche avec autorité 
              et compassion, guidant les fidèles vers une relation authentique avec Dieu 
              et vers la découverte de leur appel divin.
            </p>
            <div className="flex items-start sm:items-center space-x-4">
              <div className="w-2 h-12 sm:h-16 bg-gradient-primary rounded-full flex-shrink-0"></div>
              <blockquote className="text-lg sm:text-xl font-medium text-primary italic">
                "Chaque âme a une destinée à accomplir. Notre rôle est de l'équiper 
                pour remporter tous les combats sur son chemin."
              </blockquote>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-primary p-1 rounded-2xl shadow-elegant max-w-md mx-auto lg:max-w-none">
              <img 
                src="/lovable-uploads/3cafbaf4-48ba-4d5b-ba9a-80ab0a36b9ee.png" 
                alt="Bishop Ouattara Mohamed Idriss" 
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gold text-gold-foreground p-3 sm:p-4 rounded-xl shadow-gold">
              <p className="font-bold text-xl sm:text-2xl">92%</p>
              <p className="text-xs sm:text-sm">Recommandent notre église</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;