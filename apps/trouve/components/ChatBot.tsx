import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionLink?: string;
  actionLabel?: string;
}

interface ChatBotProps {
  type?: 'tracy' | 'trouve';
  initialOpen?: boolean;
}

export const ChatBot: React.FC<ChatBotProps> = ({ type = 'tracy', initialOpen = false }) => {
  const isTracy = type === 'tracy';
  const botName = isTracy ? 'Tracy Waithera' : 'The Genius Trouve Marketer';
  const initialGreeting = isTracy 
    ? "Hi there! 👋 I am Tracy Waithera, global brand strategist and AI marketing expert. I can share insights about the C.A.M. Authority Model, my book, or help you book a keynote. How can I inspire you today?"
    : "Hello! 👋 I am The Genius Trouve Marketer. Ready to scale your biashara? Ask me about our SMM rates, services, or how to book a strategy call.";

  const [isOpen, setIsOpen] = useState(initialOpen);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: initialGreeting
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-hide the intro message after 8 seconds if the user hasn't interacted (Tracy Only)
  useEffect(() => {
    if (initialOpen && !hasInteracted && isTracy) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [initialOpen, hasInteracted, isTracy]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      let botText = "";
      const lowerInput = userMessage.text.toLowerCase();

      if (isTracy) {
        botText = "I'd love to connect! You can book a keynote, class, or consulting session by reaching out via my contact forms.";
        if (lowerInput.includes('who are you') || lowerInput.includes('founder') || lowerInput.includes('tracy') || lowerInput.includes('about')) {
          botText = "I am a global brand strategist, AI marketing expert, and the founder of Trouve Marketing Solutions (Trouve Agency). Operating at the intersection of human creativity and machine intelligence, I help professionals and businesses build highly visible personal brands.";
        } else if (lowerInput.includes('book') || lowerInput.includes('revamp') || lowerInput.includes('mind') || lowerInput.includes('read')) {
          botText = "My book 'Revamp Your Mind: From Flying and Falling to Soaring on Eagles' Wings' is a highly strategic guide for neurological and spiritual transformation. It details my healing journey and you can read it directly on my site!";
        } else if (lowerInput.includes('brand') || lowerInput.includes('insights') || lowerInput.includes('social') || lowerInput.includes('model') || lowerInput.includes('c.a.m') || lowerInput.includes('cam')) {
          botText = "Through Trouve, I architect AI automated systems and creative digital strategies that handle the heavy lifting of marketing. My proprietary C.A.M. Authority Model focuses not only on technical business scaling but also on the mental clarity and psychological resilience of the leadership behind the brand.";
        } else if (lowerInput.includes('class') || lowerInput.includes('keynote') || lowerInput.includes('coach')) {
          botText = "You can book me for a keynote, class, or coaching session by clicking 'Contact' or 'Quote' on the main site navigation! Let's revamp your mind and scale your brand.";
        } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
          botText = "Hello! Let me know if you want to learn about my journey, my book 'Revamp Your Mind', or my work with the C.A.M. Authority Model and AI marketing.";
        }
        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'bot', text: botText }]);
      } else {
        botText = "Our experts would love to discuss this with you directly! Click below to instantly send your request to our strategy team via WhatsApp.";
        let actionLink = `https://wa.me/254702476038?text=${encodeURIComponent(userMessage.text)}`;
        let actionLabel = 'Send to WhatsApp';

        if (lowerInput.includes('rate') || lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('package')) {
          botText = "Our Brand Identity packages start at 15k KES, and our SMM rates range from our 'Authority' package at 100k KES to 'The Empire' at 350k+ KES. Send us a message to secure your package!";
        } else if (lowerInput.includes('ai') || lowerInput.includes('intelligence') || lowerInput.includes('tool')) {
          botText = "We leverage 'Cyborg Creativity'—merging human intuition with machine efficiency. Our Smart Systems use Gemini for context analysis, Midjourney/Flux for visual boundary-pushing, and custom Branding Assistants to scale your brand without losing its soul.";
        } else if (lowerInput.includes('marketing') || lowerInput.includes('advertising') || lowerInput.includes('ads') || lowerInput.includes('strategy')) {
          botText = "We believe in 'Heart & Logic'. The 'Volume Era' of posting generic content is over. We build true authority through community-first growth and Performance Advertising that prioritizes heavy Return on Ad Spend (ROAS) rather than vanity metrics.";
        } else if (lowerInput.includes('trouve') || lowerInput.includes('what do you do') || lowerInput.includes('services')) {
          botText = "Trouve Marketing Solutions builds brands with Heart & Logic. We specialize in complete Brand Foundations, Smart AI Systems, Performance Ads, and Social Media Management. Reach out on WhatsApp to get started!";
        } else if (lowerInput.includes('book') || lowerInput.includes('call') || lowerInput.includes('consultation')) {
          botText = "Fantastic! You can instantly request a strategy call directly with us through WhatsApp. Let's scale your biashara! 🚀";
        } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
          botText = "Hello! Ready to take your brand to the next level? I am The Genius Trouve Marketer. Ask me about our AI capabilities, marketing strategies, or rates.";
          actionLink = ''; 
          actionLabel = '';
        }

        setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'bot', text: botText, actionLink: actionLink || undefined, actionLabel: actionLabel || undefined }]);
      }
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end animate-in fade-in duration-500">
      {isOpen ? (
        <div className="bg-white w-[320px] sm:w-[380px] rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col mb-4 max-h-[500px]">
          {/* Header */}
          <div className={`text-white p-4 flex justify-between items-center bg-gradient-to-r ${isTracy ? 'from-purple-700 to-purple-500 bg-purple-600' : 'from-brand-navyDark to-brand-navy bg-brand-navyDark'}`}>
            <div>
              <h3 className="font-bold font-display text-lg">{botName}</h3>
              <p className="text-xs text-white/70">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`text-white transition-colors active:scale-95 ${isTracy ? 'hover:text-purple-200' : 'hover:text-brand-gold'}`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4 min-h-[300px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={"flex " + (msg.sender === 'user' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={"max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed " + (
                    msg.sender === 'user'
                      ? (isTracy ? 'bg-purple-600 text-white ' : 'bg-brand-gold text-[#001A33] ') + 'rounded-tr-none font-medium'
                      : 'bg-white border border-gray-100 text-slate-600 rounded-tl-none pr-5'
                  )}
                >
                  {msg.text}
                  {msg.actionLink && (
                    <a href={msg.actionLink} target="_blank" rel="noreferrer" className="mt-3 block text-center py-2 px-4 rounded-xl bg-[#001A33] text-white font-black uppercase tracking-widest text-[10px] hover:bg-brand-navyDark transition-colors shadow-sm">
                      {msg.actionLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="bg-white px-4 py-2 flex gap-2 border-t border-gray-100 overflow-x-auto netflix-scroll whitespace-nowrap">
            {isTracy ? (
              <>
                <button
                  onClick={() => { setInput('Tell me about Tracy'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Founder
                </button>
                <button
                  onClick={() => { setInput('Tell me about your book'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                >
                  My Book
                </button>
                <button
                  onClick={() => { setInput('What are your brand insights?'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
                >
                  Insights
                </button>
                <a
                  href="https://wa.me/254702476038"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors flex items-center gap-1"
                >
                  WhatsApp
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setInput('Tell me about your AI tools'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-navy/5 text-brand-navy rounded-full hover:bg-brand-navy hover:text-white transition-colors"
                >
                  AI Insights
                </button>
                <button
                  onClick={() => { setInput('What are your SMM rates?'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-navy/5 text-brand-navy rounded-full hover:bg-brand-navy hover:text-white transition-colors"
                >
                  Rates
                </button>
                <button
                  onClick={() => { setInput('I want to book a consultation'); setHasInteracted(true); }}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-brand-gold/10 text-brand-goldDeep rounded-full hover:bg-brand-gold hover:text-white transition-colors"
                >
                  Book Consult
                </button>
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => { setInput(e.target.value); setHasInteracted(true); }}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className={`flex-1 bg-slate-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none transition-all text-zinc-900 ${isTracy ? 'focus:border-purple-600 focus:ring-1 focus:ring-purple-600/50' : 'focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50'}`}
            />
            <button
              onClick={handleSend}
              className={`w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors active:scale-95 flex-shrink-0 ${isTracy ? 'bg-purple-600 hover:bg-purple-700' : 'bg-brand-navyDark hover:bg-brand-gold'}`}
            >
              <Send size={18} className="translate-x-[1px]" />
            </button>
          </div>
        </div>
      ) : null}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 text-white rounded-full shadow-2xl flex items-center justify-center hover:-translate-y-1 transition-all duration-300 btn-depth relative group animate-pulse ${isTracy ? 'bg-purple-600 hover:shadow-purple-600/30 hover:bg-purple-700 ring-4 ring-purple-600/40' : 'bg-brand-navyDark hover:shadow-brand-gold/20 hover:bg-brand-gold ring-4 ring-brand-navyDark/40'}`}
        >
          {isTracy ? (
            <span className="font-display font-black text-2xl">T</span>
          ) : (
            <MessageSquare size={24} />
          )}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      )}
    </div>
  );
};
