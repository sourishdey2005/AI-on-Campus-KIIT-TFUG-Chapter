import React, { useState } from 'react';
import { CLUSTERS } from '../constants';
import { Cluster } from '../types';

const Architecture: React.FC = () => {
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);

  const closeModal = () => setSelectedCluster(null);

  return (
    <section id="architecture" className="py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Research Infrastructure</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold tracking-tighter">AI on Campus – KIIT TFUG Architecture</h3>
          <p className="text-neutral-500 mt-8 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Engineered into specialized research clusters, each acting as a sovereign laboratory for ML disruption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLUSTERS.map((cluster) => (
            <div 
              key={cluster.id} 
              className="group glass p-10 rounded-[2.5rem] border-white/5 hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-700 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${cluster.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                {cluster.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-orange-500 transition-colors">{cluster.title}</h4>
              <p className="text-neutral-500 text-sm mb-10 leading-relaxed font-medium">{cluster.description}</p>
              
              <div className="space-y-3 mt-auto">
                {cluster.domains.slice(0, 4).map((domain, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-[11px] text-neutral-500 border-b border-white/5 pb-3 group-hover:text-neutral-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600/40 group-hover:bg-orange-500 transition-colors"></span>
                    <span className="font-semibold tracking-wide uppercase">{domain.name}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className="mt-10 text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 flex items-center gap-3 group-hover:gap-5 transition-all outline-none"
                onClick={() => setSelectedCluster(cluster)}
              >
                Explore Lab
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cluster Details Modal */}
      {selectedCluster && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={closeModal}></div>
          <div className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] border-white/10 relative z-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 text-neutral-500 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-10 md:p-16">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedCluster.color} flex items-center justify-center text-5xl shadow-2xl shrink-0`}>
                  {selectedCluster.icon}
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{selectedCluster.title}</h2>
                  <p className="text-neutral-400 text-xl font-light leading-relaxed mb-10">
                    {selectedCluster.description}
                  </p>
                  
                  <div className="grid gap-6">
                    {selectedCluster.domains.map((domain, idx) => (
                      <div key={idx} className="glass p-6 rounded-2xl border-white/5 hover:border-orange-500/20 transition-all group">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                          <h5 className="font-bold text-lg text-white group-hover:text-orange-500 transition-colors">{domain.name}</h5>
                        </div>
                        {domain.details && (
                          <p className="text-neutral-500 text-sm pl-6 leading-relaxed">
                            {domain.details}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => {
                        closeModal();
                        document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-10 py-5 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-500 hover:shadow-[0_0_40px_rgba(255,111,0,0.4)] transition-all"
                    >
                      Join this Cluster
                    </button>
                    <button 
                      onClick={closeModal}
                      className="px-10 py-5 glass border-white/10 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                    >
                      Close Investigation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Architecture;