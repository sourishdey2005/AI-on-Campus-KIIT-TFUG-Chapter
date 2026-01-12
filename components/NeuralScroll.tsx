
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const NeuralScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const layers = [
    { id: 'input', count: 4, label: 'Input Vector', color: '#6366f1' },
    { id: 'h1', count: 6, label: 'Hidden Layer 01', color: '#f59e0b' },
    { id: 'h2', count: 5, label: 'Hidden Layer 02', color: '#10b981' },
    { id: 'output', count: 3, label: 'Softmax Probabilities', color: '#ef4444' }
  ];

  const getConnections = () => {
    const connections: any[] = [];
    for (let i = 0; i < layers.length - 1; i++) {
      const currentLayer = layers[i];
      const nextLayer = layers[i + 1];
      for (let j = 0; j < currentLayer.count; j++) {
        for (let k = 0; k < nextLayer.count; k++) {
          connections.push({
            id: `conn-${i}-${j}-${k}`,
            layerIndex: i,
            start: j,
            end: k
          });
        }
      }
    }
    return connections;
  };

  const connections = getConnections();

  return (
    <section ref={containerRef} className="h-[250vh] relative bg-[#050505] border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        <div className="absolute top-20 text-center max-w-xl z-20">
          <motion.h2 
            style={{ opacity: useTransform(smoothProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]) }}
            className="text-[10px] uppercase tracking-[0.6em] text-orange-500 font-black mb-4"
          >
            Neural Propagation
          </motion.h2>
          <motion.h3 
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.15, 0.75, 1], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0, 0.2], [20, 0])
            }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Inside the <span className="tf-gradient">Architecture</span>
          </motion.h3>
          <motion.p 
            style={{ opacity: useTransform(smoothProgress, [0.2, 0.3, 0.7, 0.9], [0, 1, 1, 0]) }}
            className="text-neutral-500 mt-6 font-light leading-relaxed"
          >
            Observe how signals propagate through a deep neural network, triggering non-linear activations layer-by-layer as the forward pass executes.
          </motion.p>
        </div>

        <div className="relative w-full max-w-5xl h-[500px] mt-24">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 500">
            {/* Synapse Connections */}
            {connections.map((conn) => {
              const startX = (conn.layerIndex * 333) + 100;
              const endX = ((conn.layerIndex + 1) * 333) + 100;
              const startY = (500 / (layers[conn.layerIndex].count + 1)) * (conn.start + 1);
              const endY = (500 / (layers[conn.layerIndex + 1].count + 1)) * (conn.end + 1);
              
              const activateThreshold = (conn.layerIndex / layers.length) + 0.1;
              const opacity = useTransform(smoothProgress, [activateThreshold, activateThreshold + 0.2], [0.05, 0.3]);

              return (
                <motion.line
                  key={conn.id}
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="white"
                  strokeWidth="1"
                  style={{ opacity }}
                />
              );
            })}

            {/* Firing Signal Particles */}
            {connections.map((conn, idx) => {
              // Only create particles for a subset to avoid performance issues
              if (idx % 4 !== 0) return null;
              
              const startX = (conn.layerIndex * 333) + 100;
              const endX = ((conn.layerIndex + 1) * 333) + 100;
              const startY = (500 / (layers[conn.layerIndex].count + 1)) * (conn.start + 1);
              const endY = (500 / (layers[conn.layerIndex + 1].count + 1)) * (conn.end + 1);

              // We want this particle to move across the line as we scroll through its layer's range
              const startRange = (conn.layerIndex / (layers.length - 1)) * 0.7;
              const endRange = startRange + 0.2;
              
              const posX = useTransform(smoothProgress, [startRange, endRange], [startX, endX]);
              const posY = useTransform(smoothProgress, [startRange, endRange], [startY, endY]);
              const opacity = useTransform(smoothProgress, [startRange, startRange + 0.05, endRange - 0.05, endRange], [0, 1, 1, 0]);
              const scale = useTransform(smoothProgress, [startRange, endRange], [1, 1.5]);

              return (
                <motion.circle
                  key={`particle-${conn.id}`}
                  cx={posX}
                  cy={posY}
                  r="3"
                  fill="#FF6F00"
                  style={{ opacity, scale, filter: 'blur(1px)' }}
                />
              );
            })}

            {/* Neurons */}
            {layers.map((layer, lIdx) => (
              <g key={layer.id}>
                {Array.from({ length: layer.count }).map((_, nIdx) => {
                  const x = (lIdx * 333) + 100;
                  const y = (500 / (layer.count + 1)) * (nIdx + 1);
                  
                  const activationThreshold = (lIdx / (layers.length - 1)) * 0.7;
                  const glow = useTransform(smoothProgress, [activationThreshold - 0.1, activationThreshold, activationThreshold + 0.1], ["0px 0px 0px rgba(255,111,0,0)", "0px 0px 30px rgba(255,111,0,0.8)", "0px 0px 10px rgba(255,111,0,0.3)"]);
                  const scale = useTransform(smoothProgress, [activationThreshold - 0.05, activationThreshold, activationThreshold + 0.05], [1, 1.4, 1.1]);
                  const fillColor = useTransform(smoothProgress, [activationThreshold - 0.1, activationThreshold], ["#111", layer.color]);

                  return (
                    <motion.circle
                      key={`${layer.id}-${nIdx}`}
                      cx={x}
                      cy={y}
                      r="12"
                      style={{ 
                        fill: fillColor, 
                        stroke: 'rgba(255,255,255,0.1)',
                        strokeWidth: 2,
                        scale,
                        filter: lIdx === 0 ? 'none' : 'drop-shadow(0px 0px 8px rgba(0,0,0,0.5))'
                      }}
                    />
                  );
                })}
              </g>
            ))}
          </svg>

          {/* Layer Labels */}
          <div className="absolute top-full mt-10 w-full flex justify-between px-10">
            {layers.map((layer, idx) => (
              <div key={layer.id} className="text-center">
                <motion.p 
                  style={{ opacity: useTransform(smoothProgress, [(idx/(layers.length-1)) * 0.7 - 0.1, (idx/(layers.length-1)) * 0.7], [0.2, 1]) }}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-1"
                >
                  {layer.id}
                </motion.p>
                <motion.p 
                  style={{ opacity: useTransform(smoothProgress, [(idx/(layers.length-1)) * 0.7 - 0.1, (idx/(layers.length-1)) * 0.7], [0.3, 1]) }}
                  className="text-xs font-bold text-white whitespace-nowrap"
                >
                  {layer.label}
                </motion.p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Metrics Overlay */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.3, 0.4, 0.8, 0.9], [0, 1, 1, 0]) }}
          className="absolute right-10 bottom-20 glass p-6 rounded-2xl border-white/10 hidden lg:block"
        >
          <div className="space-y-4">
            <div>
              <p className="text-[9px] font-black text-neutral-500 uppercase tracking-widest mb-1">Compute Load</p>
              <motion.p className="text-lg font-mono font-bold text-orange-500">
                {useTransform(smoothProgress, [0, 1], ["0.2 TFLOPS", "14.8 TFLOPS"])}
              </motion.p>
            </div>
            <div>
              <p className="text-[9px] font-black text-neutral-500 uppercase tracking-widest mb-1">Loss Gradient</p>
              <motion.p className="text-lg font-mono font-bold text-blue-500">
                 {useTransform(smoothProgress, [0, 1], ["0.8921", "0.0012"])}
              </motion.p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[8px] font-black text-green-500 uppercase tracking-[0.2em]">Forward Pass Active</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NeuralScroll;
