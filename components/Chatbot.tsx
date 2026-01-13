import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveMessage, getMessages, clearMessages } from '../db';

const CHAT_DATA = [
  { q: "What is AI Guild on Campus?", a: "AI Guild on Campus – KIIT Chapter is the official TensorFlow Student Society dedicated to advanced ML research, engineering, and deployment." },
  { q: "How do I join the society?", a: "You can apply through our Winter Intake portal. Selection involves a Technical Audit, Architectural Sprint, and a peer-consensus interview." },
  { q: "What is TFUG?", a: "TFUG stands for TensorFlow User Group. We are an official student chapter affiliated with the global Google Developer community." },
  { q: "Is it limited to KIIT students?", a: "Currently, our core membership is restricted to Kalinga Institute of Industrial Technology (KIIT) students, but we often host open global events." },
  { q: "What technologies do you focus on?", a: "Our primary stack is TensorFlow and Keras, extending to TFX, TF Lite, TF.js, and cloud platforms like GCP." },
  { q: "Who is the faculty in-charge?", a: "The society operates under the guidance of our Faculty In-Charge from the KIIT School of Computer Engineering." },
  { q: "Do I need prior ML knowledge?", a: "While we look for aptitude, we have a 'Learner' track for high-potential beginners who demonstrate strong algorithmic foundations." },
  { q: "Are there membership fees?", a: "No, the AI Guild on Campus is a merit-based research society. We do not charge membership fees." },
  { q: "What are domain clusters?", a: "Clusters are specialized research labs within the society, such as GenAI, Deep Learning, MLOps, and Product Deployment." },
  { q: "What is the GenAI cluster?", a: "This cluster focuses on LLMs, RAG, Diffusion models, and Multi-modal foundation systems like Gemini." },
  { q: "How often are workshops held?", a: "We hold quarterly hands-on workshops and bi-weekly technical meets or study jams." },
  { q: "What are Study Jams?", a: "Study Jams are intensive, collaborative sessions focused on mastering specific modules of the TensorFlow ecosystem." },
  { q: "Can I collaborate on research?", a: "Yes, advanced members are encouraged to publish papers in the Research Rigor wing and add to our Research Archive." },
  { q: "What are the benefits for students?", a: "Benefits include industry readiness, research exposure, global recognition, and direct access to GDE mentors." },
  { q: "Is recruitment merit-based?", a: "Absolutely. We pride ourselves on a rigorous, transparent, and merit-driven selection strategy." },
  { q: "What is the selection process?", a: "It consists of a Portfolio Audit, a Technical Deep-Dive on ML theory, and a final Architectural Sprint." },
  { q: "Do you use PyTorch or TensorFlow?", a: "Our official affiliation is with TensorFlow, though we respect and occasionally audit multi-framework architectures." },
  { q: "Where are the sessions held?", a: "Most technical meets happen in our dedicated labs at KIIT School of Computer Engineering or virtually via G-Meet." },
  { q: "How do I access the Wiki?", a: "The Campus AI Wiki is an internal portal for members to document blueprints and datasets. Some parts are public." },
  { q: "What is the Archive section?", a: "The Archive is a repository of all peer-reviewed research papers and model architectures developed within the lab." },
  { q: "Who are the GDEs?", a: "GDEs are Google Developer Experts. We frequently invite them for guest talks and mentorship sessions." },
  { q: "Can I get a certificate of membership?", a: "Yes, active contributors receive official recognition and certification endorsed by the Faculty In-Charge." },
  { q: "Does the society provide compute credits?", a: "Selected research projects are granted GCP compute credits and access to KIIT's GPU clusters." },
  { q: "What is the SRE wing?", a: "The SRE (Site Reliability Engineering) Wing, also known as Engineering & Ops, manages MLOps, CI/CD, and AI Security." },
  { q: "What is the Non-Tech wing?", a: "The Non-Tech wing manages technical branding, corporate relations, events, and community growth." },
  { q: "How do I contact the President?", a: "You can reach out via the official LinkedIn handle or visit the lab during designated office hours." },
  { q: "Are alumni involved?", a: "Yes, our alumni mentors provide industry insights and placement guidance to the current cohort." },
  { q: "What is the recruitment timeline?", a: "Primary intake happens during the Winter Semester (December/January), with occasional summer lateral entries." },
  { q: "Can I switch domain clusters?", a: "Yes, after a successful rotation period and demonstrating proficiency in the target cluster's prerequisites." },
  { q: "Does the society work on real-world projects?", a: "Yes, our 'Product & Deployment' cluster turns research into functional web/mobile apps used across campus." }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [search, setSearch] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load history from DB on mount
  useEffect(() => {
    getMessages().then(history => {
      if (history && history.length > 0) {
        setMessages(history);
      }
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const handleQuestion = async (q: string, a: string) => {
    const userMsg = { role: 'user' as const, text: q, timestamp: Date.now() };
    const botMsg = { role: 'bot' as const, text: a, timestamp: Date.now() + 1 };
    
    setMessages(prev => [...prev, userMsg, botMsg]);
    
    // Persist to database
    await saveMessage(userMsg);
    await saveMessage(botMsg);
  };

  const handleClearHistory = async () => {
    await clearMessages();
    setMessages([]);
  };

  const filteredQuestions = CHAT_DATA.filter(item => 
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`pointer-events-auto glass border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isExpanded ? 'w-[400px] h-[700px] md:w-[600px] md:h-[800px]' : 'w-[320px] h-[500px] md:w-[380px] md:h-[600px]'
            }`}
          >
            {/* Header */}
            <div className="p-6 bg-white/[0.03] border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <h4 className="text-sm font-black text-white tracking-tighter uppercase">AI Guild Hub</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[8px] font-black text-neutral-500 uppercase tracking-widest">Database Linked</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-neutral-500 hover:text-white transition-colors">
                  {isExpanded ? '↙️' : '↗️'}
                </button>
                <button onClick={() => setIsMinimized(true)} className="p-2 text-neutral-500 hover:text-white transition-colors">➖</button>
                <button onClick={() => { setIsOpen(false); }} className="p-2 text-neutral-500 hover:text-white transition-colors">✕</button>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-xs font-medium text-neutral-500 leading-relaxed italic">
                    "Welcome to the AI Guild Intelligence Interface. Select a protocol to begin interrogation."
                  </p>
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <button 
                    onClick={handleClearHistory}
                    className="text-[8px] font-black uppercase tracking-widest text-neutral-600 hover:text-red-500 transition-colors"
                  >
                    Clear Neural Cache
                  </button>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-orange-600 text-white font-bold' 
                    : 'glass border-white/5 text-neutral-300'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Questions Selection */}
            <div className="p-4 bg-black/40 border-t border-white/5 shrink-0 max-h-[40%] overflow-y-auto">
              <input 
                type="text" 
                placeholder="Search Knowledge Base..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] text-white focus:outline-none focus:border-orange-500/50 mb-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="flex flex-col gap-1.5">
                {filteredQuestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(item.q, item.a)}
                    className="text-left text-[9px] font-black uppercase tracking-widest text-neutral-400 hover:text-orange-500 transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 truncate"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3 pointer-events-auto">
        <AnimatePresence>
          {isMinimized && isOpen && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => setIsMinimized(false)}
              className="px-6 py-3 glass border-white/10 text-[10px] font-black uppercase tracking-widest text-orange-500 rounded-full hover:bg-white/5 transition-all shadow-xl"
            >
              Resume Comms
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (!isOpen) { setIsOpen(true); setIsMinimized(false); }
            else { setIsOpen(false); }
          }}
          className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(255,111,0,0.4)] transition-all hover:bg-orange-500 relative z-[201]"
        >
          {isOpen ? '✕' : '🤖'}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-white/10"></span>
            </span>
          )}
        </motion.button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;