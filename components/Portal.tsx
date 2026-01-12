import React from 'react';

interface PortalProps {
  view: string;
  onClose: () => void;
}

const Portal: React.FC<PortalProps> = ({ view, onClose }) => {
  const renderContent = () => {
    switch (view) {
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
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-500 text-center">
            <header className="pb-8">
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Society Census</span>
              <h2 className="text-4xl font-black tracking-tighter">Member Directory</h2>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Sunil Kumar Sawant', role: 'Faculty In-Charge', cluster: 'Oversight' },
                { name: 'Sourish Dey', role: 'President', cluster: 'Strategy', image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232730/80b22f88-4f08-47a0-aa94-2117cbe80c9b_kbe1ph.jpg' },
                { name: 'Rounak Banerjee', role: 'Vice President', cluster: 'Strategy', image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232565/db891764-0e08-4db4-8be9-caf904aa42b4_tkg91k.jpg' },
                { name: 'Anusmita Sahu', role: 'Vice President', cluster: 'Strategy', image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232581/6cb03a67-af26-4318-9a58-7b9b93422244_ux7z99.jpg' }
              ].map((m, i) => (
                <div key={i} className="glass p-10 rounded-[3rem] border-white/5 text-center group hover:border-red-500/30 transition-all shadow-xl hover:shadow-red-500/5">
                  <div className="w-36 h-36 md:w-44 md:h-44 bg-neutral-900 rounded-full mx-auto mb-8 border-2 border-white/10 group-hover:border-red-500/40 group-hover:scale-105 transition-all duration-500 overflow-hidden flex items-center justify-center relative">
                    {m.image ? (
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-2xl text-neutral-600">👤</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{m.name}</h4>
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mt-2">{m.role}</p>
                  <p className="text-xs text-neutral-500 mt-4 font-medium">{m.cluster}</p>
                </div>
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
                <p className="text-neutral-400 text-sm leading-relaxed">Intake is restricted to sophomore and junior students demonstrating high technical aptitude or strategic operational potential.</p>
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
              ].map((ev, i) => (
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