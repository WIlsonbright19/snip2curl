import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  displayPhone?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '14152925788',
  displayPhone = '(415) 292-5788',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Book a Dry Curly Cut');

  const defaultGreeting = "Hi Snip 2 Curl! I'd like to ask about booking an appointment for my curls.";

  const quickTopics = [
    'Book a Dry Curly Cut ✂️',
    'Pricing & Hair Services 📋',
    'Openings this week? 📅',
    'Curl Consultation 💬',
  ];

  const handleStartChat = (messageText?: string) => {
    const textToSend = messageText || customMessage || selectedTopic || defaultGreeting;
    const encoded = encodeURIComponent(`Hi Snip 2 Curl! ${textToSend}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9995] font-cabinet flex flex-col items-end gap-3 select-none">
      {/* WhatsApp Chat Card Popup */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="WhatsApp Chat Window"
          className="bg-[#171411] text-[#efe5d7] border border-[#efe5d7]/20 rounded-3xl p-0 shadow-2xl w-[320px] sm:w-[360px] overflow-hidden mb-1 animate-fadeIn backdrop-blur-xl transition-all duration-300"
          style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(37, 211, 102, 0.15)' }}
        >
          {/* Card Header: WhatsApp Branded Header */}
          <div className="bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center p-1.5 backdrop-blur-sm border border-white/30">
                  <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c.969.541 1.777.818 2.806.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm3.398 8.163c-.143.404-.725.74-1.028.784-.28.042-.644.062-2.077-.533-1.834-.761-3.007-2.62-3.098-2.741-.091-.121-.744-.988-.744-1.884 0-.896.469-1.337.636-1.52.167-.183.364-.229.485-.229.121 0 .243.002.349.006.111.005.259-.042.405.31.152.364.516 1.258.562 1.349.046.091.076.197.015.319-.06.121-.091.197-.182.303-.091.107-.191.239-.273.322-.091.091-.186.19-.08.373.106.182.473.78 1.014 1.262.697.621 1.285.813 1.468.904.182.091.289.076.395-.046.106-.121.456-.531.577-.713.121-.182.243-.152.409-.091.167.061 1.061.5 1.243.591.182.091.303.136.349.212.046.076.046.44-.097.844z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2 22l4.86-1.46C8.34 21.47 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.68 0-3.25-.49-4.59-1.33l-.33-.21-2.88.87.87-2.81-.22-.35A8.15 8.15 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <div className="font-semibold text-sm flex items-center gap-1.5 leading-tight">
                  <span>Snip 2 Curl</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">Nob Hill</span>
                </div>
                <div className="text-[11px] text-white/85 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
                  <span>Online · Typically replies in mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3.5 bg-[#171411]">
            {/* Salon Intro Message Bubble */}
            <div className="bg-[#25201c] border border-[#efe5d7]/10 rounded-2xl rounded-tl-sm p-3 text-xs leading-relaxed text-[#efe5d7]/90 shadow-sm">
              <p className="font-medium text-[#c4a482] mb-1">Welcome to Snip 2 Curl! 👋</p>
              <p>
                Have questions about our dry haircut method or want to book? Chat with our Polk Street team directly on WhatsApp!
              </p>
              <span className="block text-[10px] text-[#efe5d7]/40 text-right mt-1 font-mono">Just now</span>
            </div>

            {/* Quick Topic Buttons */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#efe5d7]/50 font-mono mb-2">
                Choose a topic:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickTopics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic);
                      handleStartChat(topic);
                    }}
                    className={`text-xs px-2.5 py-1.5 rounded-full transition-all border cursor-pointer text-left ${
                      selectedTopic === topic
                        ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366] font-medium'
                        : 'bg-[#efe5d7]/5 border-[#efe5d7]/15 text-[#efe5d7]/80 hover:bg-[#efe5d7]/10 hover:text-white'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Field */}
            <div className="space-y-1.5 pt-1">
              <input
                type="text"
                placeholder="Or type a message here..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleStartChat();
                  }
                }}
                className="w-full bg-[#0e0c0a] border border-[#efe5d7]/20 rounded-xl px-3 py-2 text-xs text-[#efe5d7] placeholder-[#efe5d7]/40 focus:outline-none focus:border-[#25D366] transition-colors"
              />
            </div>

            {/* Main Action Button */}
            <button
              onClick={() => handleStartChat()}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-[#123e1f] font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c.969.541 1.777.818 2.806.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm3.398 8.163c-.143.404-.725.74-1.028.784-.28.042-.644.062-2.077-.533-1.834-.761-3.007-2.62-3.098-2.741-.091-.121-.744-.988-.744-1.884 0-.896.469-1.337.636-1.52.167-.183.364-.229.485-.229.121 0 .243.002.349.006.111.005.259-.042.405.31.152.364.516 1.258.562 1.349.046.091.076.197.015.319-.06.121-.091.197-.182.303-.091.107-.191.239-.273.322-.091.091-.186.19-.08.373.106.182.473.78 1.014 1.262.697.621 1.285.813 1.468.904.182.091.289.076.395-.046.106-.121.456-.531.577-.713.121-.182.243-.152.409-.091.167.061 1.061.5 1.243.591.182.091.303.136.349.212.046.076.046.44-.097.844z"/>
              </svg>
              <span>Start WhatsApp Chat</span>
            </button>

            {/* Quick Call Link inside popup */}
            <div className="pt-2 border-t border-[#efe5d7]/10 flex items-center justify-between text-[11px] text-[#efe5d7]/70">
              <span>Prefer a phone call?</span>
              <a
                href={`tel:${phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`}`}
                aria-label="Call Snip 2 Curl"
                className="button is-nav font-bold text-xs bg-[#efe5d7] hover:bg-white text-[#171411] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-black/15 shadow-sm cursor-pointer"
              >
                <div className="button-text">
                  <div className="button_text">Call Us</div>
                  <div className="button-text-animation">
                    <div className="button_text">Call Us</div>
                  </div>
                </div>
                <svg className="button-image is-nav w-3 h-3 text-[#171411] fill-[#171411] shrink-0" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Row (Call Button + WhatsApp Button) */}
      <div className="flex items-center gap-2.5">
        {/* Floating Call Button - Styled identical to Book a Visit */}
        <a
          href={`tel:${phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`}`}
          aria-label="Call Snip 2 Curl"
          className="button is-nav font-bold cursor-pointer bg-[#efe5d7] hover:bg-white text-[#171411] border border-[#171411]/25 px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group backdrop-blur-md"
          title="Call Snip 2 Curl"
        >
          <div className="button-text">
            <div className="button_text">Call Us</div>
            <div className="button-text-animation">
              <div className="button_text">Call Us</div>
            </div>
          </div>
          <svg className="button-image is-nav w-3.5 h-3.5 text-[#171411] fill-[#171411] shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp Chat"
          className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white px-3.5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          style={{ boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)' }}
          title="Chat with Snip 2 Curl on WhatsApp"
        >
          {/* Subtle Attention Ping Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          {/* WhatsApp Logo SVG */}
          <div className="w-5 h-5 flex items-center justify-center">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.697c.969.541 1.777.818 2.806.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm3.398 8.163c-.143.404-.725.74-1.028.784-.28.042-.644.062-2.077-.533-1.834-.761-3.007-2.62-3.098-2.741-.091-.121-.744-.988-.744-1.884 0-.896.469-1.337.636-1.52.167-.183.364-.229.485-.229.121 0 .243.002.349.006.111.005.259-.042.405.31.152.364.516 1.258.562 1.349.046.091.076.197.015.319-.06.121-.091.197-.182.303-.091.107-.191.239-.273.322-.091.091-.186.19-.08.373.106.182.473.78 1.014 1.262.697.621 1.285.813 1.468.904.182.091.289.076.395-.046.106-.121.456-.531.577-.713.121-.182.243-.152.409-.091.167.061 1.061.5 1.243.591.182.091.303.136.349.212.046.076.046.44-.097.844z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.5 5.29L2 22l4.86-1.46C8.34 21.47 10.11 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.68 0-3.25-.49-4.59-1.33l-.33-.21-2.88.87.87-2.81-.22-.35A8.15 8.15 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
            </svg>
          </div>

          <span className="text-xs font-semibold tracking-wide text-white whitespace-nowrap">
            WhatsApp
          </span>

          {/* Green Online Dot */}
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        </button>
      </div>
    </div>
  );
};
