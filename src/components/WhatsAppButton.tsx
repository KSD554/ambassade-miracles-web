import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+2250704306642";
  const message = "Bonjour, je viens du site officiel de l'Église Ambassade des Miracles. J'ai besoin d'échanger avec un homme de Dieu de toute urgence.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contacter via WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        
        {/* Main button */}
        <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full p-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl animate-bounce">
          <MessageCircle size={28} />
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-500"></div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Contactez-nous sur WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;