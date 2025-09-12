export default class ChatBot {
  private knowledge = {
    greetings: [
      "bonjour", "salut", "bonsoir", "bonne journée", "hello", "hey", "coucou"
    ],
    about: [
      "qui êtes-vous", "qu'est-ce que", "c'est quoi", "mission", "église", "ambassade", "miracles", "à propos"
    ],
    services: [
      "service", "culte", "horaire", "programme", "activité", "réunion", "prière", "jeune"
    ],
    contact: [
      "contact", "adresse", "téléphone", "où", "localisation", "comment vous joindre", "numéro"
    ],
    participation: [
      "participer", "rejoindre", "comment", "inscription", "adhérer", "membre"
    ],
    testimonials: [
      "témoignage", "avis", "preuve", "miracle", "transformation", "expérience"
    ],
    help: [
      "aide", "problème", "difficulté", "conseil", "soutien", "assistance"
    ]
  };

  private responses = {
    greeting: [
      "🙏 Que la paix du Seigneur soit avec vous ! Comment puis-je vous aider aujourd'hui ?",
      "🌟 Bienvenue ! Je suis là pour répondre à toutes vos questions sur notre église.",
      "✨ Bonjour et bienvenue à l'Église Ambassade des Miracles ! En quoi puis-je vous assister ?"
    ],
    about: `🏛️ **L'Église Ambassade des Miracles** est une organisation religieuse chrétienne située à Cocody, Abidjan. 

Notre **mission** est de :
• Bâtir des vies 
• Impacter des générations
• Manifester la gloire de Dieu

Nos **valeurs** : Foi, unité, miracles, service communautaire et impact spirituel et social.

Avez-vous d'autres questions sur notre église ?`,

    services: `⛪ **Nos Services et Ministères :**

🕐 **Cultes dominicaux** - Tous les dimanches
🙏 **Réunions de prière et intercession** 
🌙 **Veillées spirituelles**
👥 **Groupes de jeunes** et formation spirituelle
📚 **Séminaires et conférences**
🤝 **Actions sociales et humanitaires**

Pour les horaires détaillés, consultez notre section Services ou contactez-nous !

Y a-t-il un service particulier qui vous intéresse ?`,

    contact: `📞 **Coordonnées de l'Église :**

📍 **Adresse :** Cocody, Attoban, derrière le commissariat du 30ème arrondissement près de la CGRAE, Abidjan, Côte d'Ivoire

📱 **Téléphones :** 
• 0759200200 
• +225 59 20 02 00

🆘 **WhatsApp urgence :** +2250704306642

🌐 **Site web :** bishopomi.org

Nous sommes **toujours ouverts** pour vous accueillir !`,

    participation: `🤝 **Comment rejoindre notre communauté :**

✅ **Assistez à nos cultes** en présentiel
📝 **Inscrivez-vous** via notre formulaire en ligne
📱 **Suivez-nous** sur nos réseaux sociaux
💬 **Contactez-nous** directement pour plus d'informations

Notre communauté vous accueillera avec joie ! Voulez-vous plus de détails sur un aspect particulier ?`,

    testimonials: `⭐ **Témoignages et Impact :**

📊 **92% de recommandations** (273 avis positifs)
✨ **Nombreux témoignages** de vies transformées
🙏 **Miracles vécus** par nos fidèles
🤝 **Forte dynamique communautaire**

Ces témoignages illustrent l'impact réel de notre église dans la vie des gens. Souhaitez-vous connaître des témoignages spécifiques ?`,

    help: `🤗 **Nous sommes là pour vous aider !**

Notre équipe pastorale est disponible pour :
• Conseils spirituels
• Prières personnalisées  
• Accompagnement dans les difficultés
• Guidance et soutien

📞 **Contact d'urgence :** +2250704306642 (WhatsApp)

N'hésitez pas à nous contacter, aucun problème n'est trop petit ou trop grand pour Dieu !`,

    default: `🤔 Je comprends votre question, mais j'aimerais vous orienter au mieux ! 

Puis-je vous aider avec :
• 🏛️ **Informations sur l'église** (mission, valeurs)
• ⛪ **Services et horaires** de culte
• 📞 **Coordonnées** et contact
• 🤝 **Comment rejoindre** la communauté  
• ⭐ **Témoignages** et impact
• 🆘 **Aide spirituelle** et soutien

Ou utilisez le bouton WhatsApp pour parler directement avec un responsable !`
  };

  getResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (this.containsKeywords(lowerMessage, this.knowledge.greetings)) {
      return this.getRandomResponse(this.responses.greeting);
    }
    
    // Check for about queries
    if (this.containsKeywords(lowerMessage, this.knowledge.about)) {
      return this.responses.about;
    }
    
    // Check for services queries
    if (this.containsKeywords(lowerMessage, this.knowledge.services)) {
      return this.responses.services;
    }
    
    // Check for contact queries
    if (this.containsKeywords(lowerMessage, this.knowledge.contact)) {
      return this.responses.contact;
    }
    
    // Check for participation queries
    if (this.containsKeywords(lowerMessage, this.knowledge.participation)) {
      return this.responses.participation;
    }
    
    // Check for testimonials queries
    if (this.containsKeywords(lowerMessage, this.knowledge.testimonials)) {
      return this.responses.testimonials;
    }
    
    // Check for help queries
    if (this.containsKeywords(lowerMessage, this.knowledge.help)) {
      return this.responses.help;
    }
    
    return this.responses.default;
  }

  private containsKeywords(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }

  private getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }
}