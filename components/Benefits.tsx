
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,111,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Strategic Impact</h2>
          <h3 className="text-5xl font-extrabold tracking-tighter mb-8">Expected Benefits</h3>
          <p className="text-neutral-500 text-xl font-light leading-relaxed">
            The establishment of TFUG KIIT serves as a powerful link between academia, industry, and the international TensorFlow ecosystem, nurturing a culture of hands-on ML learning and open-source collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* For Students */}
          <div className="group glass p-10 rounded-[3rem] border-white/5 hover:bg-orange-500/[0.02] hover:border-orange-500/20 transition-all duration-700">
            <div className="w-14 h-14 rounded-2xl glass border border-orange-500/20 flex items-center justify-center text-2xl mb-10 group-hover:scale-110 transition-transform">
              🎓
            </div>
            <h4 className="text-2xl font-black text-white mb-8 tracking-tight">For Students</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Practical Skill Dev</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Hands-on experience with TensorFlow, Keras, and TF-Lite through real-world dataset pipelines.</p>
              </div>
              <div>
                <h5 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Portfolio Building</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">GitHub-centric contributions and model-building challenges highly valued for high-tier placements.</p>
              </div>
              <div>
                <h5 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Global Networking</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Direct connection with Google Developer Experts (GDEs) and ML engineers worldwide.</p>
              </div>
              <div>
                <h5 className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">Confidence & Exposure</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Boosted problem-solving skills by representing KIIT in global community programs.</p>
              </div>
            </div>
          </div>

          {/* For the College */}
          <div className="group glass p-10 rounded-[3rem] border-white/5 hover:bg-blue-500/[0.02] hover:border-blue-500/20 transition-all duration-700">
            <div className="w-14 h-14 rounded-2xl glass border border-blue-500/20 flex items-center justify-center text-2xl mb-10 group-hover:scale-110 transition-transform">
              🏛️
            </div>
            <h4 className="text-2xl font-black text-white mb-8 tracking-tight">For the University</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Enhanced Reputation</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Positioning KIIT as a premier center of excellence for Deep Learning and Applied AI innovation.</p>
              </div>
              <div>
                <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Industry Engagement</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Strengthened ties with AI giants through guest talks, workshops, and high-impact mentorship.</p>
              </div>
              <div>
                <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Academic Growth</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Complementing theoretical coursework with industry-standard, production-level ML systems.</p>
              </div>
              <div>
                <h5 className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-3">Interdisciplinary Collaboration</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Encouraging AI cross-pollination between CSE, Biotech, and Robotics departments.</p>
              </div>
            </div>
          </div>

          {/* For TensorFlow Global */}
          <div className="group glass p-10 rounded-[3rem] border-white/5 hover:bg-green-500/[0.02] hover:border-green-500/20 transition-all duration-700">
            <div className="w-14 h-14 rounded-2xl glass border border-green-500/20 flex items-center justify-center text-2xl mb-10 group-hover:scale-110 transition-transform">
              🌍
            </div>
            <h4 className="text-2xl font-black text-white mb-8 tracking-tight">For TFUG Global</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-green-500 text-[10px] font-black uppercase tracking-widest mb-3">Increased Engagement</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Scaling student participation in GitHub repositories, study jams, and core community discussions.</p>
              </div>
              <div>
                <h5 className="text-green-500 text-[10px] font-black uppercase tracking-widest mb-3">Community Growth</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Expanding Google’s developer ecosystem in India through young, high-potential innovators.</p>
              </div>
              <div>
                <h5 className="text-green-500 text-[10px] font-black uppercase tracking-widest mb-3">Talent Identification</h5>
                <p className="text-neutral-400 text-sm leading-relaxed">Early identification of emerging ML researchers and engineers for the broader ecosystem.</p>
              </div>
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">Ecosystem Status</span>
                </div>
                <p className="text-xs text-neutral-500 font-medium">Synchronized with TFUG Global Guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
