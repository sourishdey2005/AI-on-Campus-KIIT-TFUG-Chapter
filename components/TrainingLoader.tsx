import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TrainingLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const trainingLogs = [
    "Initializing Neural Core...",
    "Epoch 1/1: Loading Weights [=======]",
    "Val Loss: 0.0012 | Accuracy: 0.9998",
    "Finalizing Environment...",
    "System Ready."
  ];

  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < trainingLogs.length) {
        setLogs(prev => [...prev, trainingLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(20px)' }}
          className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center p-6"
        >
          <div className="w-full max-w-md">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] font-black uppercase text-orange-500 tracking-[0.4em] mb-1">Training Session</p>
                <h2 className="text-xl font-black text-white uppercase tracking-tighter">Hydrating Ecosystem</h2>
              </div>
              <span className="text-xs font-mono text-neutral-600">LR: 0.001</span>
            </div>
            
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-8">
              <div className="h-full bg-orange-600 training-bar-fill"></div>
            </div>

            <div className="space-y-2">
              {logs.map((log, i) => (
                <motion.p
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className="text-[10px] font-mono text-neutral-500"
                >
                  <span className="text-orange-500 mr-2">{"\u003E\u003E\u003E"}</span> {log}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrainingLoader;