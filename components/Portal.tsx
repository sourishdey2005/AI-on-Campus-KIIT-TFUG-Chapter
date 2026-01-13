import React, { useState } from 'react';
// Added Variants to import list
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { LEADERSHIP_TEAM } from '../constants';

interface PortalProps {
  view: string;
  onClose: () => void;
}

const Portal: React.FC<PortalProps> = ({ view, onClose }) => {
  const [memberIndex, setMemberIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const members = [
    { 
      name: 'Sricheta Parui', 
      role: 'Faculty In-Charge', 
      cluster: 'Oversight', 
      bio: 'Directing the academic and research initiatives of the AI Guild with a focus on institutional alignment.',
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768295442/ea3b8408-db41-434c-b0e7-302863f25117_juc6mp.jpg' 
    },
    { 
      name: 'Sourish Dey', 
      role: 'President', 
      cluster: 'Strategy', 
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232730/80b22f88-4f08-47a0-aa94-2117cbe80c9b_kbe1ph.jpg', 
      bio: 'Strategic lead for TensorFlow community integration and high-tier research orchestration.' 
    },
    { 
      name: 'Rounak Banerjee', 
      role: 'Vice President', 
      cluster: 'Technical Ops', 
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232565/db891764-0e08-4db4-8be9-caf904aa42b4_tkg91k.jpg', 
      bio: 'Managing technical domain clusters, engineering pipelines, and hardware laboratory logistics.' 
    },
    { 
      name: 'Anusmita Sahu', 
      role: 'Vice President', 
      cluster: 'Executive Ops', 
      image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232581/6cb03a67-af26-4318-9a58-7b9b93422244_ux7z99.jpg', 
      bio: 'Leading operational logistics, community growth strategies, and corporate relationship management.' 
    }
  ];

  // Explicitly typed as Variants to fix string-to-literal assignment error for 'type: "spring"'
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setMemberIndex((prev) => (prev + newDirection + members.length) % members.length);
  };

  const renderContent = () => {
    switch (view) {
      case 'leadership':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="border-b border-white/5 pb-8 text-center md:text-left">
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">The Strategic Engine</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Leadership & Domain Experts</h2>
              <p className="text-neutral-500 mt-4 text-sm max-w-2xl font-medium leading-relaxed">
                The tactical layer responsible for executing domain clusters, coordinating high-octane events, and managing guild-wide liaisons.
              </p>
            </header>
            
            {LEADERSHIP_TEAM.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LEADERSHIP_TEAM.map((member: any, i: number) => (
                  <motion.div 
                    whileHover={{ y: -5 }}
                    key={i} 
                    className="glass p-6 rounded-[2.5rem] border-white/5 hover:border-orange-500/20 group relative overflow-hidden"
                  >
                    <div className="flex gap-6 items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-orange-500/40 transition-colors">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest block mb-1">{member.role}</span>
                        <h4 className="text-lg font-bold text-white tracking-tight">{member.name}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-medium italic mb-2">
                      "{member.desc}"
                    </p>
                    <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <span className="text-4xl">🏛️</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-32 flex flex-col items-center justify-center text-center opacity-40">
                <div className="w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center text-3xl mb-6">
                  ⏳
                </div>
                <h4 className="text-xl font-black uppercase tracking-widest text-white mb-2">Registry Under Maintenance</h4>
                <p className="text-sm font-medium text-neutral-500 max-w-xs">Domain leads and tactical coordinators will be listed shortly. Deployment in progress.</p>
              </div>
            )}
          </div>
        );
      case 'guidelines':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="border-b border-white/5 pb-8">
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Standard Operating Procedures</span>
              <h2 className="text-4xl font-black tracking-tighter">TFUG Community Guidelines</h2>
            </header>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border-white/5">
                <h3 className="text-xl font-bold mb-4">Technical Contribution</h3>
                <ul className="space-y-4 text-neutral-400 text-sm">
                  <li>• Use Keras Functional API for complex multi-input architectures.</li>
                  <li>• All shared notebooks must include a "Reproducibility" section.</li>
                  <li>• Models over 100M parameters require lead reviewer sign-off.</li>
                </ul>
              </div>
              <div className="glass p-8 rounded-3xl border-white/5">
                <h3 className="text-xl font-bold mb-4">Code of Conduct</h3>
                <ul className="space-y-4 text-neutral-400 text-sm">
                  <li>• Radical intellectual honesty in reporting model failures.</li>
                  <li>• Direct attribution for all derived datasets and pretrained weights.</li>
                  <li>• Peer reviews must be constructive, evidence-based, and objective.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'archive':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="border-b border-white/5 pb-8">
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Intellectual Repository</span>
              <h2 className="text-4xl font-black tracking-tighter">Research Archive</h2>
            </header>
            <div className="grid gap-6">
              {[
                { title: 'Neural Latent Splicing for High-Res Synthesis', author: 'Vision Cluster', year: '2026' },
                { title: 'Attention-based Geo-Spatial Analysis', author: 'Foundation Cluster', year: '2025' },
                { title: 'Quantized Transformers on ESP32 Hardware', author: 'Edge AI Cluster', year: '2026' }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 flex justify-between items-center group hover:border-blue-500/40 transition-all cursor-pointer">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">{item.author} • {item.year}</p>
                  </div>
                  <button className="px-4 py-2 glass border-white/10 rounded-lg text-[9px] font-black uppercase hover:bg-white/5">Download PDF</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'wiki':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
             <header className="border-b border-white/5 pb-8">
              <span className="text-green-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Central Documentation</span>
              <h2 className="text-4xl font-black tracking-tighter">Campus AI Wiki</h2>
            </header>
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-4">
                  <h3 className="text-sm font-black text-neutral-500 uppercase tracking-widest px-2">Setup Guides</h3>
                  <div className="space-y-2">
                    {['TensorFlow on CUDA 12.x', 'Apple Silicon (M1/M2/M3) Setup', 'Dockerizing ML Workloads'].map(g => (
                      <button key={g} className="w-full text-left p-4 glass rounded-xl border-white/5 text-xs font-bold hover:bg-white/5 transition-all">{g}</button>
                    ))}
                  </div>
               </div>
               <div className="lg:col-span-2 glass p-10 rounded-[3rem] border-white/5">
                  <h3 className="text-2xl font-black mb-6">Introduction to the Ecosystem</h3>
                  <div className="prose prose-invert max-w-none text-neutral-400 space-y-4 text-sm leading-relaxed">
                    <p>Welcome to the official AI Guild on Campus – KIIT Chapter internal knowledge base. This wiki is maintained by the Technical Lead wing to ensure seamless knowledge transfer between student cohorts.</p>
                    <p>Each domain cluster maintains its own sub-directory containing:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Architecture blueprints for core cluster projects.</li>
                        <li>Internal dataset registries (sanitized and validated).</li>
                        <li>Benchmark reports for KIIT local hardware clusters.</li>
                      </ul>
                    </p>
                    <p className="pt-6 font-mono text-orange-500/80">root@tf-lab-kiit:~$ access wiki --all</p>
                  </div>
               </div>
            </div>
          </div>
        );
      case 'directory':
        return (
          <div className="h-full flex flex-col items-center animate-in fade-in duration-700">
            <header className="text-center mb-8">
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.5em] mb-2 block">Strategic Leadership</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Member Directory</h2>
              <p className="text-neutral-500 text-sm max-w-xl mx-auto">Click arrows or swipe to navigate through the executive board.</p>
            </header>

            <div className="relative w-full max-w-5xl h-[650px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-[80%] h-full bg-red-600/5 blur-[120px] rounded-full"></div>
              </div>

              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={memberIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center p-4"
                >
                  <div className="glass w-full max-w-3xl rounded-[3rem] border-white/10 flex flex-col md:flex-row items-center overflow-hidden shadow-2xl bg-black/40 backdrop-blur-3xl">
                    {/* Image Section - Completely Visible and Prominent */}
                    <div className="w-full md:w-1/2 h-72 md:h-[500px] relative overflow-hidden">
                      {members[memberIndex].image ? (
                        <img 
                          src={members[memberIndex].image!} 
                          alt={members[memberIndex].name} 
                          className="w-full h-full object-cover object-top" 
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-8xl text-neutral-800 font-black">?</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-10 md:p-14 text-left flex flex-col h-full">
                      <div className="mb-8">
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-2 block">{members[memberIndex].role}</span>
                        <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">{members[memberIndex].name}</h4>
                      </div>
                      
                      <div className="w-12 h-1 bg-red-500 mb-8"></div>
                      
                      <p className="text-sm md:text-base text-neutral-300 font-medium leading-relaxed mb-auto italic">
                        "{members[memberIndex].bio}"
                      </p>

                      <div className="mt-10 flex items-center justify-between">
                         <div className="flex flex-col">
                           <span className="text-[8px] font-black text-neutral-600 uppercase tracking-widest mb-1">Assigned Cluster</span>
                           <span className="text-xs font-bold text-white uppercase tracking-tight">{members[memberIndex].cluster}</span>
                         </div>
                         <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-xs opacity-40">
                            0{memberIndex + 1}
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-8 z-20 pointer-events-none">
                <motion.button 
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className="w-14 h-14 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/40 border-white/10 transition-all pointer-events-auto shadow-xl"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className="w-14 h-14 md:w-16 md:h-16 glass rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/40 border-white/10 transition-all pointer-events-auto shadow-xl"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </motion.button>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-4 mt-8 pb-4">
              {members.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > memberIndex ? 1 : -1);
                    setMemberIndex(i);
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${i === memberIndex ? 'w-16 bg-red-600' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        );
      case 'recruitment':
        return (
          <div className="max-w-2xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="text-center">
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Admissions 2026</span>
              <h2 className="text-4xl font-black tracking-tighter">Society Selection</h2>
            </header>
            <div className="glass p-10 rounded-[3rem] border-white/10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Eligibility & Intake</h3>
                <p className="text-neutral-400 text-sm client-relaxed">Intake is restricted to sophomore and junior students demonstrating high technical aptitude or strategic operational potential.</p>
              </div>
              <div className="grid gap-4">
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-xl">Start Technical Assessment</button>
                <button className="w-full py-5 glass border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">Non-Technical Application</button>
              </div>
              <p className="text-center text-[10px] text-neutral-600 uppercase tracking-widest">Applications close December 15th, 2026</p>
            </div>
          </div>
        );
      case 'process':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="border-b border-white/5 pb-8 text-center">
              <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Selection Protocol</span>
              <h2 className="text-4xl font-black tracking-tighter">Interview Pipeline</h2>
            </header>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>
              <div className="space-y-12">
                {[
                  { stage: 'Portfolio Audit', desc: 'Evaluation of GitHub repositories and project depth.' },
                  { stage: 'Architectural Sprint', desc: 'Live whiteboard session on neural network design patterns.' },
                  { stage: 'Technical Deep-Dive', desc: 'Rigorous verbal examination on ML theory and linear algebra.' },
                  { stage: 'Core Consensus', desc: 'Final review by Faculty and Executive leads.' }
                ].map((s, i) => (
                  <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 text-center md:text-left">
                      <div className={`p-8 glass rounded-3xl border-white/5 hover:border-purple-500/20 transition-all ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                        <h4 className="text-xl font-bold mb-2">{s.stage}</h4>
                        <p className="text-neutral-500 text-sm">{s.desc}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full glass border border-purple-500/40 flex items-center justify-center text-xs font-black z-10 shrink-0 bg-[#050505]">0{i+1}</div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'bylaws':
        return (
          <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="text-center">
              <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Foundational Charter</span>
              <h2 className="text-4xl font-black tracking-tighter">Society Bylaws</h2>
            </header>
            <div className="glass p-12 rounded-[3.5rem] border-white/10 space-y-8 font-serif leading-loose text-neutral-400">
              <p>Section I: The society shall operate as an autonomous student body under the School of Computer Engineering, KIIT.</p>
              <p>Section II: All research outcomes utilizing lab resources must be documented within the Campus Wiki and attributed correctly.</p>
              <p>Section III: Leadership positions are merit-based, evaluated annually through performance metrics and peer consensus.</p>
              <div className="pt-10 border-t border-white/5 flex justify-center">
                 <button className="px-8 py-3 glass border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Download Full Charter (PDF)</button>
              </div>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
            <header className="text-center">
              <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Operational Timeline</span>
              <h2 className="text-4xl font-black tracking-tighter">Society Calendar</h2>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { date: 'OCT 12', event: 'Transformers Workshop', type: 'Hands-on' },
                { date: 'OCT 24', event: 'Paper Review Session', type: 'Academic' },
                { date: 'NOV 05', event: 'TF-Lite IoT Sprint', type: 'Hackathon' },
                { date: 'NOV 18', event: 'Guest Talk: GDE Experts', type: 'Industry' },
                { date: 'DEC 01', event: 'Winter Selection Kickoff', type: 'Admin' }
              ].map((ev: any, i: number) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:border-orange-500/30 transition-all flex items-start gap-4">
                  <div className="bg-orange-600/10 border border-orange-500/20 rounded-lg px-3 py-2 text-center shrink-0">
                    <p className="text-[10px] font-black text-orange-500 leading-none">{ev.date.split(' ')[0]}</p>
                    <p className="text-lg font-black text-white">{ev.date.split(' ')[1]}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{ev.event}</h4>
                    <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500">{ev.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose}></div>
      <div className="glass w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] border-white/10 relative z-10 p-10 md:p-20 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default Portal;