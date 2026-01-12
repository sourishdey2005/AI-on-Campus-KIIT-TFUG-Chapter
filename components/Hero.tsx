
import React from 'react';

const Hero: React.FC = () => {
  const scrollToJoin = () => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToArchitecture = () => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-600/30 text-orange-500 text-[10px] font-bold mb-10 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Official TensorFlow Student Society
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.95] transition-all duration-700">
            AI on <span className="tf-gradient">Campus</span> <br /> 
            <span className="text-white/40">— KIIT</span> <span className="text-white/20 italic font-light">chapter</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 font-light mb-14 leading-relaxed max-w-2xl">
            Engineering the next epoch of intelligence. <br className="hidden md:block"/>
            Official TFUG Student Chapter providing industry-grade mastery of TensorFlow 
            and scalable Machine Learning ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={scrollToJoin}
              className="px-10 py-5 bg-orange-600/20 backdrop-blur-xl border border-orange-500/40 text-white rounded-xl font-bold hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,111,0,0.3)] transition-all flex items-center justify-center gap-3 group"
            >
              Join TF LAB
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button 
              onClick={scrollToArchitecture}
              className="px-10 py-5 glass border-white/10 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Explore Domains
            </button>
          </div>

          <div className="mt-24 flex items-center gap-16 border-t border-white/5 pt-14">
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-orange-500 transition-colors">500+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Active Minds</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">12+</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Published Papers</p>
            </div>
            <div className="group cursor-default">
              <p className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors">TFUG</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-semibold">Affiliated Hub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Snippet Floating Visual */}
      <div className="hidden xl:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[520px] animate-float">
        <div className="glass rounded-[2rem] p-8 border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <div className="w-32 h-32 border-[20px] border-orange-500 rounded-full"></div>
          </div>
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
          </div>
          <pre className="mono text-[13px] leading-relaxed text-blue-300/90">
            <code>{`import tensorflow as tf

@tf.function
class TFLabArchitecture(tf.Module):
  def __init__(self, name=None):
    super().__init__(name=name)
    self.layer = tf.keras.layers.Dense(
        512, activation='relu')
    self.output = tf.keras.layers.Dense(10)

  def __call__(self, x):
    x = self.layer(x)
    return self.output(x)

# TF LAB: Deploying Intelligence
model = TFLabArchitecture(name='KIIT_HUB')`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
