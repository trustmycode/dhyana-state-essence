import { MessageCircle, Send } from "lucide-react";
import { trackEvent } from "@/lib/tracking";

const FloatingContacts = () => {
  const handleWhatsAppClick = () => {
    trackEvent("click_whatsapp");
    window.open("https://wa.me/77001234567?text=Здравствуйте! Хочу узнать о ретрите", "_blank");
  };

  const handleTelegramClick = () => {
    trackEvent("click_telegram");
    window.open("https://t.me/sammasati", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-fade-in">
      <button
        onClick={handleWhatsAppClick}
        className="group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-md bg-card text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          WhatsApp
        </span>
      </button>
      
      <button
        onClick={handleTelegramClick}
        className="group w-14 h-14 rounded-full bg-[#0088cc] hover:bg-[#0077b5] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float"
        style={{ animationDelay: "0.5s" }}
        aria-label="Telegram"
      >
        <Send className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-md bg-card text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Telegram
        </span>
      </button>
    </div>
  );
};

export default FloatingContacts;
