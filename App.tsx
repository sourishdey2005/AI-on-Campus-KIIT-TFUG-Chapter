import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Architecture from './components/Architecture';
import DomainMap from './components/DomainMap';
import ModelVisualizer from './components/ModelVisualizer';
import NeuralScroll from './components/NeuralScroll';
import OperatingModel from './components/OperatingModel';
import CareerAccelerator from './components/CareerAccelerator';
import KnowledgeEcosystem from './components/KnowledgeEcosystem';
import ResearchRigor from './components/ResearchRigor';
import Governance from './components/Governance';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Portal from './components/Portal';
import IntelligenceVisualizer from './components/IntelligenceVisualizer';
import CommunityTrustVisualizer from './components/CommunityTrustVisualizer';
import InstitutionalEndorsement from './components/InstitutionalEndorsement';
import Section from './components/Section';
import TrainingLoader from './components/TrainingLoader';
import Chatbot from './components/Chatbot';
import { ACTIVITIES, ORG_CHART } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [activePortal, setActivePortal] = useState<string | null>(null);

  const openPortal = (view: string) => setActivePortal(view);
  const closePortal = () => setActivePortal(null);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-orange-600 selection:text-white">
      <TrainingLoader />
      <Navbar onOpenPortal={openPortal} />
      
      <main>
        <Hero onOpenPortal={openPortal} />
        
        <Section id="about">
          <About />
        </Section>

        <Section>
          <DomainMap />
        </Section>

        <Section>
          <ModelVisualizer />
        </Section>

        <Section>
          <NeuralScroll />
        </Section>

        <Section>
          <Architecture />
        </Section>

        <Section>
          <IntelligenceVisualizer />
        </Section>

        <Section>
          <KnowledgeEcosystem />
        </Section>

        <Section>
          <OperatingModel />
        </Section>

        <Section>
          <CommunityTrustVisualizer />
        </Section>

        <Section>
          <ResearchRigor />
        </Section>

        <Section>
          <CareerAccelerator />
        </Section>

        <Section>
          <Governance />
        </Section>

        <Section>
          <Benefits />
        </Section>

        <Section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-orange-600/5 blur-[120px] rounded-full -translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Operations</h2>
                <h3 className="text-5xl font-extrabold tracking-tighter">Activity Ecosystem</h3>
                <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
                  A high-octane mix of technical and non-technical activities designed to keep members industry-ready and research-focused.
                </p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openPortal('calendar')}
                className="px-8 py-4 glass border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3"
              >
                Society Calendar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v12a2 2 0 002 2z"></path></svg>
              </motion.button>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACTIVITIES.map((activity, idx) => (
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                  key={idx} 
                  className="p-10 rounded-[2rem] glass border-white/5 hover:border-orange-500/40 hover:bg-white/[0.04] transition-all duration-500 group h-full"
                >
                  <div className="text-4xl mb-8 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{activity.icon}</div>
                  <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-orange-500 transition-colors">{activity.title}</h4>
                  <p className="text-neutral-500 text-sm mb-10 leading-relaxed font-medium">{activity.description}</p>
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-black">Core Outcome</span>
                    <p className="text-xs text-orange-500 font-black mt-2 uppercase tracking-tight">{activity.outcome}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="governance" className="py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full -mr-40 -mt-40 animate-pulse-soft"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-black mb-8">Selection Strategy</h2>
                <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-10 leading-[0.95]">Elite <span className="text-white/40">Recruitment</span></h3>
                <p className="text-neutral-400 text-xl font-light leading-relaxed mb-12">
                  AI Guild on Campus – KIIT TFUG is a sanctuary for the exceptional. We identify high-potential students through multi-stage technical audits, live sprints, and peer-consensus interviews.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 rounded-2xl glass border-blue-500/30 flex items-center justify-center shrink-0 font-black text-blue-500 group-hover:bg-blue-500/30 group-hover:text-white transition-all duration-500">01</div>
                    <div>
                      <h5 className="font-bold text-white text-lg mb-2">Technical Audit</h5>
                      <p className="text-neutral-500 leading-relaxed">Assessing algorithmic depth and foundational grasp of neural computation principles.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start group">
                    <div className="w-14 h-14 rounded-2xl glass border-blue-500/30 flex items-center justify-center shrink-0 font-black text-blue-500 group-hover:bg-blue-500/30 group-hover:text-white transition-all duration-500">02</div>
                    <div>
                      <h5 className="font-bold text-white text-lg mb-2">Architectural Sprint</h5>
                      <p className="text-neutral-500 leading-relaxed">Live model-building sessions utilizing the Keras functional API to solve edge-case datasets.</p>
                    </div>
                  </div>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openPortal('recruitment')}
                  className="mt-14 px-10 py-5 bg-blue-600/20 backdrop-blur-xl border border-blue-500/40 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all flex items-center gap-3 group"
                >
                  Apply for Winter Intake
                  <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </motion.button>
              </div>
              
              <div className="glass p-14 rounded-[3rem] border-white/10 shadow-2xl backdrop-blur-3xl">
                <h4 className="text-3xl font-black mb-10 flex items-center gap-4">
                  <span className="w-2.5 h-10 bg-blue-500 rounded-full"></span>
                  Member Benefits
                </h4>
                <div className="grid gap-6">
                  {[
                    { label: 'Industry Readiness', val: 'Global Benchmarked' },
                    { label: 'Research Exposure', val: 'Advanced Repository' },
                    { label: 'TFUG Network', val: 'Direct Access' },
                    { label: 'Compute Credits', val: 'GCP Ready' }
                  ].map((item, i) => (
                    <motion.div 
                      whileHover={{ x: 5 }}
                      key={i} 
                      className="group flex justify-between items-center p-6 rounded-2xl glass border-white/5 hover:border-blue-500/30 transition-all cursor-default"
                    >
                      <span className="text-neutral-300 font-semibold group-hover:text-white transition-colors">{item.label}</span>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest glass bg-blue-400/10 px-3 py-1.5 rounded-lg border border-blue-400/20">{item.val}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-32 bg-[#050505] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-500 font-black mb-20">Structural Hierarchy</h2>
            <div className="flex flex-col items-center gap-10">
              {ORG_CHART.map((member, idx) => (
                <motion.div 
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  key={idx} 
                  className="flex flex-col items-center relative group"
                >
                  {idx !== 0 && <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent mb-4 group-hover:h-12 transition-all"></div>}
                  <div className="px-12 py-6 glass rounded-2xl border-white/10 transition-all duration-500 hover:border-orange-500/50 min-w-[320px] group-hover:shadow-[0_0_30px_rgba(255,111,0,0.1)]">
                    <p className="text-[10px] text-orange-500 font-black uppercase tracking-[0.3em] mb-2">{member.role}</p>
                    <h5 className="text-xl font-black text-white tracking-tight">{member.name}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <InstitutionalEndorsement />
        </Section>
      </main>

      <Footer onOpenPortal={openPortal} />

      {activePortal && (
        <Portal view={activePortal} onClose={closePortal} />
      )}

      <Chatbot />
    </div>
  );
};

export default App;