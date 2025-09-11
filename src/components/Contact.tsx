import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Globe, Mail, Clock, Bus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Cocody, Attoban derrière le commissariat", "du 30ème arrondissement", "près de la CGRAE, Abidjan"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphones",
      details: ["+225 07 59 200 200", "+225 59 20 02 00"],
      color: "text-gold"
    },
    {
      icon: Globe,
      title: "Site Web",
      details: ["bishopomi.org"],
      color: "text-primary"
    },
    {
      icon: Bus,
      title: "Transport Gratuit",
      details: ["+225 0596 085 951"],
      color: "text-gold"
    }
  ];

  const schedules = [
    { day: "Mercredi", time: "17H00 - 21H00", type: "Enseignements & Prières" },
    { day: "Jeudi", time: "17H00 - 21H00", type: "Prières Intenses" },
    { day: "Vendredi", time: "17H00 - 21H00", type: "Mini-Veillée (05-12-19-26)" },
    { day: "Dimanche", time: "08H00 - 11H00", type: "Culte Dominical" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Contactez-Nous
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous serions ravis de vous accueillir dans notre communauté. 
            N'hésitez pas à nous contacter pour toute question ou demande de prière.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-primary flex items-center space-x-2">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Envoyez-nous un message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message, demande de prière ou question..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" className="w-full">
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="border-none shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary">Informations de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className={`text-xs sm:text-sm ${info.color}`}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="border-none shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary flex items-center space-x-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span>Horaires des Cultes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-secondary/50 rounded-lg space-y-1 sm:space-y-0">
                    <div>
                      <p className="font-semibold text-primary text-sm sm:text-base">{schedule.day}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{schedule.type}</p>
                    </div>
                    <p className="text-gold font-semibold text-sm sm:text-base">{schedule.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="border-none shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary">Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 rounded-lg p-6 sm:p-8 text-center">
                  <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-gold mx-auto mb-4" />
                  <p className="text-primary font-semibold mb-2 text-sm sm:text-base">Cocody, Attoban</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                    Derrière le commissariat du 30ème arrondissement, près de la CGRAE
                  </p>
                  <Button variant="outline" className="text-sm">
                    Voir sur Google Maps
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