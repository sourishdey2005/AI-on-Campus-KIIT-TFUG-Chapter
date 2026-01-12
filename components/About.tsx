
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-4">Core Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Empowering Developers with TensorFlow.</h3>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              TensorFlow is not just a library; it's a global standard for high-performance machine learning. 
              Our society acts as the bridge between academic curiosity and industrial execution at KIIT.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                <p className="text-orange-500 font-bold text-sm mb-2">Industry Grade</p>
                <p className="text-neutral-400 text-xs">Developing models that are ready for production deployment, not just research notebooks.</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                <p className="text-blue-500 font-bold text-sm mb-2">Open Source</p>
                <p className="text-neutral-400 text-xs">Contributing back to the global community through public kernels and research artifacts.</p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="glass p-10 rounded-2xl border-white/5">
              <div className="text-3xl mb-6">👁️</div>
              <h4 className="text-2xl font-bold mb-4">The Vision</h4>
              <p className="text-neutral-400 font-light leading-relaxed italic">
                "To make KIIT a nationally recognized hub for applied AI, deep learning, and ML innovation, 
                where student research directly influences industry standards."
              </p>
            </div>
            
            <div className="glass p-10 rounded-2xl border-orange-600/20 bg-orange-600/[0.02]">
              <div className="text-3xl mb-6">🎯</div>
              <h4 className="text-2xl font-bold mb-4 text-orange-500">The Mission</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex gap-4">
                  <span className="text-orange-500 font-bold">01</span>
                  <span>Hands-on TensorFlow mastery through intensive lab-based curriculum.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-orange-500 font-bold">02</span>
                  <span>Collaborative ML research published in top-tier global forums.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-orange-500 font-bold">03</span>
                  <span>Direct participation in global TFUG community events and challenges.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
