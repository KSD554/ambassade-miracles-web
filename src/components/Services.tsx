import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Culte du Mercredi",
      subtitle: "Enseignements & Prières",
      time: "17H00 - 21H00",
      icon: Calendar,
      description: "Soirée d'enseignement biblique approfondi et de prières pour la percée spirituelle.",
      features: ["Enseignement biblique", "Prières de percée", "Témoignages"]
    },
    {
      title: "Culte du Jeudi", 
      subtitle: "Prières Intenses",
      time: "17H00 - 21H00",
      icon: Sparkles,
      description: "Nuit de prières puissantes pour la délivrance et les miracles.",
      features: ["Prières de délivrance", "Intercession", "Miracles"]
    },
    {
      title: "Mini-Veillée du Vendredi",
      subtitle: "05-12-19-26",
      time: "17H00 - 21H00", 
      icon: Clock,
      description: "Veillées spéciales de prières pour les percées personnelles et familiales.",
      features: ["Veillée de prières", "Percées personnelles", "Bénédictions familiales"]
    },
    {
      title: "Culte Dominical",
      subtitle: "Adoration & Communion",
      time: "08H00 - 11H00",
      icon: Users,
      description: "Grand rassemblement dominical avec adoration, prédication et communion fraternelle.",
      features: ["Louange & adoration", "Prédication", "Communion fraternelle"]
    }
  ];

  const specialEvents = [
    {
      title: "5 Semaines de Prières",
      date: "03 Septembre - 05 Octobre 2025",
      description: "Campagne spirituelle intensive pour remporter les combats liés à sa destinée"
    },
    {
      title: "Transport Gratuit",
      phone: "+225 0596 085 951",
      description: "Service de transport gratuit disponible pour faciliter votre participation"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos Services & Programmes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez-nous pour des moments privilégiés de communion, d'enseignement 
            et de prières puissantes qui transforment les vies.
          </p>
        </div>

        {/* Special Events Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {specialEvents.map((event, index) => (
            <div key={index} className="bg-gradient-hero p-6 sm:p-8 rounded-2xl text-primary-foreground shadow-elegant">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{event.title}</h3>
              {event.date && <p className="text-base sm:text-lg mb-4 text-gold">{event.date}</p>}
              {event.phone && <p className="text-base sm:text-lg mb-4 text-gold">{event.phone}</p>}
              <p className="text-sm sm:text-base text-primary-foreground/90">{event.description}</p>
            </div>
          ))}
        </div>

        {/* Regular Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-primary mb-2">{service.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {service.subtitle}
                </Badge>
              </CardHeader>
              <CardContent className="text-center space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center space-x-2 text-gold font-semibold text-sm sm:text-base">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{service.time}</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{service.description}</p>
                <div className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 bg-gold rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center bg-secondary/50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Informations Pratiques</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-muted-foreground">
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-2">Adresse</h4>
              <p className="text-xs sm:text-sm">Cocody, Attoban derrière le commissariat du 30ème arrondissement, près de la CGRAE, Abidjan</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Téléphones</h4>
              <p className="text-xs sm:text-sm">+225 07 59 200 200</p>
              <p className="text-xs sm:text-sm">+225 59 20 02 00</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Site Web</h4>
              <p className="text-xs sm:text-sm">bishopomi.org</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;