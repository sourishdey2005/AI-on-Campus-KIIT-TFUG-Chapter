
import React from 'react';

const Governance: React.FC = () => {
  return (
    <section id="governance-standards" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-red-500 font-black mb-6">Ethics & Conduct</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-8">Social Contract</h3>
            <div className="grid gap-4">
              {[
                { title: 'Radical Respect', desc: 'Fostering an environment where intellectual diversity is the primary catalyst for growth.' },
                { title: 'Inclusive Excellence', desc: 'Active elimination of barriers to entry for underrepresented groups in compute.' },
                { title: 'Zero-Tolerance Plagiarism', desc: 'Rigorous attribution of architectures, weights, and research methodologies.' }
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-red-500/20 transition-all">
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-blue-500 font-black mb-6">Legal Framework</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter mb-8">IP & Data Policy</h3>
            <div className="glass p-10 rounded-[3rem] border-white/5 bg-blue-500/[0.01]">
              <div className="space-y-8">
                <div>
                  <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Ownership Model</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Student-developed code remains the intellectual property of the creators. However, all lab-funded projects are encouraged to follow the <span className="text-white font-bold underline decoration-blue-500/40">Apache 2.0 License</span> for open-source utility.
                  </p>
                </div>
                <div>
                  <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Dataset Integrity</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Strict adherence to GDPR and local data privacy laws during the collection of training data. No PII is stored within lab-accessible clusters.
                  </p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">🛡️</div>
                    <p className="text-[10px] font-black uppercase text-white tracking-widest">Scientific Reproducibility<br/><span className="text-blue-400">Verifiable. Documented. Robust.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
