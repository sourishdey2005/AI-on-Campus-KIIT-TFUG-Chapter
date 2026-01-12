
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: number;
  label: string;
  description: string;
  color: string;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string;
  target: string;
  tech: string;
}

const DomainMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const rotationAngle = useRef(0);

  const data: { nodes: Node[]; links: Link[] } = {
    nodes: [
      { id: 'dl', group: 1, label: 'Deep Learning', description: 'Core neural engine optimized for gradient-based optimization.', color: '#FF6F00' },
      { id: 'cv', group: 1, label: 'Computer Vision', description: 'Spatial feature extraction via convolutional kernels and ViTs.', color: '#FFA000' },
      { id: 'nlp', group: 1, label: 'NLP', description: 'Syntactic and semantic analysis of sequential tokens.', color: '#FFB300' },
      { id: 'llm', group: 1, label: 'LLMs', description: 'Autoregressive generation at scale using multi-head attention.', color: '#FFD54F' },
      { id: 'genai', group: 2, label: 'Generative AI', description: 'Cross-modal latent space manipulation for synthetic content.', color: '#2563EB' },
      { id: 'rl', group: 2, label: 'Reinforcement Learning', description: 'Markov decision process optimization via policy gradients.', color: '#3B82F6' },
      { id: 'mlops', group: 3, label: 'MLOps', description: 'Continuous deployment pipelines and model registry orchestration.', color: '#8B5CF6' },
      { id: 'edge', group: 3, label: 'Edge AI', description: 'Quantized inference for low-latency hardware constraints.', color: '#D946EF' },
      { id: 'ds', group: 4, label: 'Data Science', description: 'Foundational statistical inference and feature engineering.', color: '#10B981' },
      { id: 'tfx', group: 3, label: 'TFX Pipelines', description: 'Production-ready machine learning platform for TensorFlow.', color: '#A855F7' },
      { id: 'tflite', group: 3, label: 'TF Lite', description: 'Deploying high-performance models on mobile and IoT.', color: '#EC4899' },
    ],
    links: [
      { source: 'dl', target: 'cv', tech: 'CNN' },
      { source: 'dl', target: 'nlp', tech: 'RNN' },
      { source: 'nlp', target: 'llm', tech: 'Transformer' },
      { source: 'llm', target: 'genai', tech: 'Diffusion' },
      { source: 'dl', target: 'genai', tech: 'GAN' },
      { source: 'dl', target: 'rl', tech: 'Q-Learning' },
      { source: 'mlops', target: 'dl', tech: 'CI/CD' },
      { source: 'edge', target: 'dl', tech: 'Quantization' },
      { source: 'ds', target: 'dl', tech: 'Inference' },
      { source: 'mlops', target: 'tfx', tech: 'Orchestration' },
      { source: 'dl', target: 'tfx', tech: 'Training' },
      { source: 'edge', target: 'tflite', tech: 'Deployment' },
      { source: 'dl', target: 'tflite', tech: 'Optimization' },
    ]
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = 600;
    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    // Create a container for the graph to rotate
    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force('link', d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-800))
      .force('center', d3.forceCenter(0, 0))
      .force('collision', d3.forceCollide().radius(60));

    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', '#222')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '4,4');

    // Add glowing data packets moving along links
    const packets = g.append('g')
      .attr('class', 'packets')
      .selectAll('circle')
      .data(data.links)
      .join('circle')
      .attr('r', 2)
      .attr('fill', '#FF6F00')
      .attr('filter', 'drop-shadow(0 0 4px #FF6F00)');

    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(data.nodes)
      .join('g')
      .attr('class', 'node')
      .call(drag(simulation) as any);

    // Node outer glow
    node.append('circle')
      .attr('r', 12)
      .attr('fill', 'transparent')
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1)
      .attr('class', 'pulse-glow');

    // Node core
    node.append('circle')
      .attr('r', 8)
      .attr('fill', d => d.color)
      .on('mouseover', (event, d) => {
        setHoveredNode(d);
        d3.select(event.currentTarget.parentNode).select('text').transition().style('opacity', 1).attr('font-size', '14px');
        d3.select(event.currentTarget).transition().attr('r', 12);
      })
      .on('mouseout', (event) => {
        setHoveredNode(null);
        d3.select(event.currentTarget.parentNode).select('text').transition().style('opacity', 0.6).attr('font-size', '10px');
        d3.select(event.currentTarget).transition().attr('r', 8);
      });

    node.append('text')
      .attr('dy', 25)
      .attr('text-anchor', 'middle')
      .style('opacity', 0.6)
      .style('font-weight', '700')
      .style('fill', '#888')
      .style('pointer-events', 'none')
      .text(d => d.label);

    const tick = () => {
      // Apply rotation
      if (!hoveredNode) {
        rotationAngle.current += 0.0015;
      }
      g.attr('transform', `translate(${width / 2}, ${height / 2}) rotate(${rotationAngle.current * 50})`);

      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('transform', (d: any) => `translate(${d.x},${d.y}) rotate(${-(rotationAngle.current * 50)})`); // Counter-rotate text

      // Animate data packets
      const t = Date.now() * 0.001;
      packets
        .attr('cx', (d: any) => {
          const speed = 0.5 + (Math.sin(t + d.index) * 0.2);
          const progress = (t * speed) % 1;
          return d.source.x + (d.target.x - d.source.x) * progress;
        })
        .attr('cy', (d: any) => {
          const speed = 0.5 + (Math.sin(t + d.index) * 0.2);
          const progress = (t * speed) % 1;
          return d.source.y + (d.target.y - d.source.y) * progress;
        })
        .attr('opacity', (d: any) => {
          const t_val = (t * 0.5) % 1;
          return Math.sin(t_val * Math.PI);
        });
    };

    simulation.on('tick', tick);

    function drag(sim: d3.Simulation<Node, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event: any) {
        if (!event.active) sim.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    return () => {
      simulation.stop();
    };
  }, [data.nodes, data.links, hoveredNode]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,111,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Neural Topology</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter">Live Intelligence Graph</h3>
            <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
              An active visualization of the society's research domains. Observe the continuous propagation of knowledge across the TensorFlow ecosystem, from core Deep Learning to specialized Edge deployment.
            </p>
          </div>
          
          <div className="shrink-0">
             <div className="glass p-8 rounded-3xl border-white/10 min-w-[320px] transition-all duration-500">
                {hoveredNode ? (
                  <div className="animate-in fade-in slide-in-from-right-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: hoveredNode.color }}></div>
                      <h4 className="font-black text-xl tracking-tight text-white uppercase">{hoveredNode.label}</h4>
                    </div>
                    <p className="text-neutral-400 leading-relaxed font-medium text-sm">{hoveredNode.description}</p>
                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
                       <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest">Node Inspected</span>
                       <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">ID: 0x{hoveredNode.id.toUpperCase()}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-neutral-600">
                    <div className="w-12 h-12 mb-6 opacity-20 relative">
                       <div className="absolute inset-0 border-2 border-dashed border-current rounded-full animate-[spin_10s_linear_infinite]"></div>
                       <svg className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-center">Synchronizing Neural Links<br/>Hover to intercept</p>
                  </div>
                )}
             </div>
          </div>
        </div>

        <div className="relative glass rounded-[4rem] border-white/5 bg-white/[0.01] overflow-hidden cursor-move shadow-2xl">
          <svg ref={svgRef} className="w-full h-[600px]"></svg>
          
          <div className="absolute top-8 left-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-white/10">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">System Live</span>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500 glass px-8 py-4 rounded-3xl border-white/10 backdrop-blur-md">
             <div className="flex items-center gap-2 group cursor-help">
                <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform"></span> Core Research
             </div>
             <div className="flex items-center gap-2 group cursor-help">
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span> Product Stack
             </div>
             <div className="flex items-center gap-2 group cursor-help">
                <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></span> Engineering Ops
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .pulse-glow {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default DomainMap;
