
import React from 'react';

const KnowledgeEcosystem: React.FC = () => {
  const papers = [
    { title: 'Attention Is All You Need', tag: 'Foundational', level: 'Intermediate' },
    { title: 'Vision Transformers (ViT)', tag: 'CV-Core', level: 'Research-Grade' },
    { title: 'EfficientNet Optimization', tag: 'Scaling', level: 'Practitioner' }
  ];

  return (
    <section id="knowledge-ecosystem" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Cognitive Architecture</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter">Knowledge Ecosystem</h3>
            <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
              We eliminate random learning by providing a curated, hyper-structured academic path synchronized with Google's ML standards.
            </p>
          </div>
          
          <div className="flex gap-4">
             <button onClick={() => alert('Redirecting to Internal Documentation Wiki...')} className="px-8 py-4 glass border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500/10 transition-all">Internal Wiki</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Learning Stack */}
          <div className="lg:col-span-1 glass p-10 rounded-[3rem] border-white/5">
            <h4 className="text-2xl font-black mb-8">Recommended Stack</h4>
            <div className="space-y-4">
              {[
                { name: 'TF Official Documentation', type: 'Core API' },
                { name: 'Google ML Crash Course', type: 'Foundations' },
                { name: 'TF Certificates (Google Cloud)', type: 'Validation' },
                { name: 'Stanford CS231n / CS224n', type: 'Theory' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl glass border-white/5 hover:border-orange-500/20 transition-all">
                  <span className="text-white text-xs font-bold">{item.name}</span>
                  <span className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">{item.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reading Group Archive */}
          <div className="lg:col-span-2 glass p-10 rounded-[3rem] border-white/5">
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-2xl font-black">Reading Group Archive</h4>
              <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest bg-orange-500/10 px-4 py-2 rounded-lg">Last Updated: 24h ago</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {papers.map((paper, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 group hover:bg-white/[0.02] transition-all">
                  <div className="flex gap-2 mb-4">
                    <span className="text-[8px] font-black uppercase px-2 py-1 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20">{paper.tag}</span>
                    <span className="text-[8px] font-black uppercase px-2 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20">{paper.level}</span>
                  </div>
                  <h5 className="font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{paper.title}</h5>
                  <button className="text-[9px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
                    Read Summary <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              ))}
              <div className="glass p-6 rounded-2xl border-white/5 border-dashed flex flex-col items-center justify-center text-center group cursor-pointer hover:border-orange-500/40 transition-all">
                <span className="text-2xl mb-2 group-hover:scale-125 transition-transform">➕</span>
                <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">Submit Proposal for Next Paper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeEcosystem;
