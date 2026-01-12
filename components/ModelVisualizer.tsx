
import React, { useState } from 'react';

interface Layer {
  name: string;
  type: string;
  params: string;
  flops: string;
  useCase: string;
}

interface Architecture {
  id: string;
  name: string;
  description: string;
  layers: Layer[];
}

const ARCHITECTURES: Architecture[] = [
  {
    id: 'cnn',
    name: 'Convolutional Neural Network',
    description: 'Specialized for spatial feature extraction and pattern recognition in grid-like data.',
    layers: [
      { name: 'Input', type: 'Image (224x224x3)', params: '0', flops: '0', useCase: 'Raw pixel ingestion' },
      { name: 'Conv2D', type: 'Feature Map (112x112x64)', params: '1.7K', flops: '86M', useCase: 'Edge detection' },
      { name: 'MaxPool', type: 'Downsampling', params: '0', flops: '0.8M', useCase: 'Spatial invariance' },
      { name: 'Conv2D', type: 'Feature Map (56x56x128)', params: '73K', flops: '230M', useCase: 'Texture analysis' },
      { name: 'GlobalAvg', type: 'Pooling', params: '0', flops: '0.1M', useCase: 'Spatial aggregation' },
      { name: 'Dense', type: 'Softmax Class', params: '128K', flops: '0.2M', useCase: 'Final classification' },
    ]
  },
  {
    id: 'transformer',
    name: 'Transformer Block',
    description: 'The backbone of modern LLMs, utilizing self-attention to weight global dependencies.',
    layers: [
      { name: 'Embedding', type: 'Token Latent', params: '12M', flops: '0', useCase: 'Semantic mapping' },
      { name: 'Multi-Head', type: 'Self-Attention', params: '4M', flops: '450M', useCase: 'Global context' },
      { name: 'Add & Norm', type: 'Residual', params: '1K', flops: '2M', useCase: 'Gradient stability' },
      { name: 'FeedForward', type: 'MLP', params: '16M', flops: '1.2G', useCase: 'Feature transformation' },
      { name: 'Add & Norm', type: 'Residual', params: '1K', flops: '2M', useCase: 'Final normalization' },
    ]
  },
  {
    id: 'lstm',
    name: 'LSTM Recurrent Unit',
    description: 'Optimized for sequential data with gated memory cells to prevent vanishing gradients.',
    layers: [
      { name: 'Input Gate', type: 'Sigmoid', params: '4K', flops: '8K', useCase: 'Information filtering' },
      { name: 'Forget Gate', type: 'Sigmoid', params: '4K', flops: '8K', useCase: 'Memory clearing' },
      { name: 'Cell State', type: 'Tanh', params: '0', flops: '12K', useCase: 'Long-term storage' },
      { name: 'Output Gate', type: 'Sigmoid', params: '4K', flops: '8K', useCase: 'Hidden state update' },
    ]
  }
];

const ModelVisualizer: React.FC = () => {
  const [activeArch, setActiveArch] = useState<Architecture>(ARCHITECTURES[0]);
  const [hoveredLayer, setHoveredLayer] = useState<Layer | null>(null);

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Neural Inspection</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter">Model Architecture Visualizer</h3>
            <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
              Interactive structural analysis of industry-standard neural architectures. Dive into the parameter space and computational cost of each layer.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {ARCHITECTURES.map((arch) => (
              <button
                key={arch.id}
                onClick={() => setActiveArch(arch)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeArch.id === arch.id
                    ? 'bg-orange-600 text-white shadow-[0_0_30px_rgba(255,111,0,0.3)]'
                    : 'glass border-white/10 text-neutral-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {arch.id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="glass rounded-[3rem] p-12 border-white/5 relative bg-white/[0.01] overflow-x-auto">
              <div className="flex items-center gap-6 min-w-max pb-4">
                {activeArch.layers.map((layer, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      onMouseEnter={() => setHoveredLayer(layer)}
                      onMouseLeave={() => setHoveredLayer(null)}
                      className="group cursor-help animate-in slide-in-from-left duration-500"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-32 h-48 glass rounded-2xl border-white/10 group-hover:border-orange-500/50 flex flex-col items-center justify-center p-4 transition-all group-hover:-translate-y-2 group-hover:bg-orange-500/5">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-xs text-orange-500 font-black">{idx + 1}</span>
                        </div>
                        <p className="text-xs font-black text-white text-center uppercase tracking-tighter">{layer.name}</p>
                        <p className="text-[9px] text-neutral-500 text-center mt-2 font-medium leading-tight">{layer.type}</p>
                      </div>
                    </div>
                    {idx < activeArch.layers.length - 1 && (
                      <div className="w-12 h-px bg-gradient-to-r from-orange-500/40 to-transparent relative">
                         <div className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 rounded-full bg-orange-500 animate-pulse"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="glass p-8 rounded-[2.5rem] border-white/10 h-full flex flex-col justify-center">
              {hoveredLayer ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest mb-4 block">Layer Telemetry</span>
                  <h4 className="text-3xl font-black text-white tracking-tighter mb-6">{hoveredLayer.name}</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Parameters</p>
                      <p className="text-xl font-bold text-white">{hoveredLayer.params}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mb-1">Compute Cost</p>
                      <p className="text-xl font-bold text-white">{hoveredLayer.flops} FLOPs</p>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-[10px] text-orange-500 uppercase font-black tracking-widest mb-2">Functional Utility</p>
                      <p className="text-sm text-neutral-400 leading-relaxed italic">"{hoveredLayer.useCase}"</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 opacity-20">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <p className="text-[10px] text-neutral-600 uppercase font-black tracking-[0.2em]">Select a layer for<br/>deep inspection</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelVisualizer;
