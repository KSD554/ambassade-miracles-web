import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatBot from "./ChatBot";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showInvitation, setShowInvitation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBot = new ChatBot();

  // Show invitation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInvitation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Hide invitation after 10 seconds if not clicked
  useEffect(() => {
    if (showInvitation) {
      const timer = setTimeout(() => {
        setShowInvitation(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showInvitation]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "🙏 Bienvenue à l'Église Ambassade des Miracles ! Je suis ici pour répondre à toutes vos questions. Comment puis-je vous aider aujourd'hui ?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Get bot response
    setTimeout(() => {
      const botResponse = chatBot.getResponse(text.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleInvitationClick = () => {
    setShowInvitation(false);
    setIsOpen(true);
  };

  return (
    <>
      {/* Chat Invitation */}
      {showInvitation && !isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 border border-border rounded-lg shadow-2xl p-4 max-w-xs relative">
            <button
              onClick={() => setShowInvitation(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
            <div className="flex items-start space-x-3">
              <div className="bg-primary rounded-full p-2">
                <Bot className="text-primary-foreground" size={16} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Besoin d'aide ?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Je peux répondre à vos questions sur notre église et nos services.
                </p>
                <Button
                  onClick={handleInvitationClick}
                  className="mt-2 text-xs h-7 px-3"
                  size="sm"
                >
                  Discuter maintenant
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800 transform translate-y-full"></div>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-20 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full p-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group"
            size="lg"
          >
            <div className="relative">
              <MessageSquare size={24} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Poser une question
            </span>
          </Button>
        ) : (
          <div className="bg-background border border-border rounded-lg shadow-2xl w-80 h-96 flex flex-col animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <div>
                  <h3 className="font-semibold text-sm">Assistant Spirituel</h3>
                  <p className="text-xs opacity-90">En ligne maintenant</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
              >
                <X size={16} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] flex items-start space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                      {message.sender === 'user' ? (
                        <User size={12} className="text-primary-foreground" />
                      ) : (
                        <Bot size={12} className="text-muted-foreground" />
                      )}
                    </div>
                    <div
                      className={`px-3 py-2 rounded-lg text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 text-sm"
                />
                <Button type="submit" size="sm" className="px-3">
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWidget;