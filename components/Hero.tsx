
import React from 'react';

const Hero: React.FC = () => {
  const scrollToJoin = () => document.getElementById('governance')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToArchitecture = () => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-[1600px] mx-auto px-6 w-full relative z-10">
        <div className="w-full lg:max-w-[65%] xl:max-w-[60%]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-orange-600/30 text-orange-500 text-[10px] font-bold mb-10 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Official TensorFlow Student Society
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] transition-all duration-700 lg:whitespace-nowrap">
            AI on <span className="tf-gradient">Campus</span>
            <span className="text-white/40"> — KIIT</span> 
            <span className="text-white/20 italic font-light ml-2">chapter</span>
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

          <div className="mt-24 flex items-center gap-16 border-t border-white/5 pt-14 max-w-2xl">
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

      {/* Floating Elements Area - Strategically placed to never overlap on 1440px+ screens */}
      <div className="hidden lg:block absolute right-[2%] top-0 bottom-0 w-[35%] xl:w-[40%] pointer-events-none overflow-visible">
        
        {/* Main Code Card - Vertical Center */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[420px] xl:w-[500px] animate-float pointer-events-auto z-20">
          <div className="glass rounded-[2rem] p-8 border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <div className="w-24 h-24 border-[15px] border-orange-500 rounded-full"></div>
            </div>
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
            </div>
            <pre className="mono text-[10px] xl:text-[12px] leading-relaxed text-blue-300/90">
              <code>{`import tensorflow as tf

@tf.function
class NeuralCore(tf.Module):
  def __init__(self):
    self.layer = tf.keras.layers.Dense(1024)
    self.dropout = tf.keras.layers.Dropout(0.5)

  def __call__(self, x):
    return self.layer(x)

# AI on Campus: Ready for Deployment
hub = NeuralCore()
print("KIIT_CLUSTER_READY")`}</code>
            </pre>
          </div>
        </div>

        {/* JSON API Response Card - Top Position */}
        <div className="absolute top-[12%] right-[5%] w-[280px] xl:w-[320px] animate-float pointer-events-auto z-10" style={{ animationDelay: '2.5s' }}>
          <div className="glass p-6 rounded-2xl border-white/5 shadow-xl bg-black/40">
             <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <span className="text-[8px] font-black uppercase text-blue-500 tracking-widest">Model Endpoint</span>
                <span className="text-[8px] font-black text-green-500">200 OK</span>
             </div>
             <pre className="mono text-[9px] xl:text-[10px] text-green-400/80 leading-tight">
{`{
  "node": "KIIT_TF_LAB",
  "status": "synchronized",
  "accuracy": 0.9992,
  "cluster": "dl-research",
  "active_users": 524
}`}
             </pre>
          </div>
        </div>

        {/* Analytics Card - Bottom Position */}
        <div className="absolute bottom-[10%] right-[8%] w-[340px] xl:w-[380px] animate-float pointer-events-auto z-30" style={{ animationDelay: '1.2s' }}>
           <div className="glass p-6 rounded-3xl border-white/10 shadow-2xl bg-gradient-to-br from-orange-500/5 to-transparent">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center text-orange-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2 2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-neutral-500 uppercase tracking-widest">Layer Stats</p>
                    <p className="text-xs font-bold text-white tracking-tight">Gradient Flow</p>
                 </div>
              </div>
              <div className="flex items-end gap-1 h-16 mb-4 px-2">
                 {[30, 50, 40, 80, 60, 25, 75, 50, 90, 35].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group">
                       <div 
                         className="absolute bottom-0 left-0 right-0 bg-orange-600/40 group-hover:bg-orange-500 transition-all rounded-t-sm" 
                         style={{ height: `${h}%` }}
                       ></div>
                    </div>
                 ))}
              </div>
              <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-neutral-600">
                 <span>Input</span>
                 <span>Hidden_04</span>
                 <span>Output</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
