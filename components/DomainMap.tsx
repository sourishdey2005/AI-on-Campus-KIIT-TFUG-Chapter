
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

  const data: { nodes: Node[]; links: Link[] } = {
    nodes: [
      { id: 'dl', group: 1, label: 'Deep Learning', description: 'The core engine of modern AI architectures.', color: '#FF6F00' },
      { id: 'cv', group: 1, label: 'Computer Vision', description: 'Teaching machines to perceive visual reality.', color: '#FFA000' },
      { id: 'nlp', group: 1, label: 'NLP', description: 'Advanced natural language processing and syntax.', color: '#FFB300' },
      { id: 'llm', group: 1, label: 'LLMs', description: 'Large-scale generative language modeling.', color: '#FFD54F' },
      { id: 'genai', group: 2, label: 'Generative AI', description: 'Creating new content across modalities.', color: '#2563EB' },
      { id: 'rl', group: 2, label: 'Reinforcement Learning', description: 'Agent-based learning through interaction.', color: '#3B82F6' },
      { id: 'mlops', group: 3, label: 'MLOps', description: 'The engineering lifecycle of model deployment.', color: '#8B5CF6' },
      { id: 'edge', group: 3, label: 'Edge AI', description: 'Intelligence on low-power hardware.', color: '#D946EF' },
      { id: 'ds', group: 4, label: 'Data Science', description: 'The foundation of inference and analysis.', color: '#10B981' },
    ],
    links: [
      { source: 'dl', target: 'cv', tech: 'TensorFlow' },
      { source: 'dl', target: 'nlp', tech: 'Keras' },
      { source: 'nlp', target: 'llm', tech: 'Transformers' },
      { source: 'llm', target: 'genai', tech: 'Diffusion' },
      { source: 'dl', target: 'genai', tech: 'GANs' },
      { source: 'dl', target: 'rl', tech: 'Policy Gradients' },
      { source: 'mlops', target: 'dl', tech: 'TFX' },
      { source: 'edge', target: 'dl', tech: 'TF Lite' },
      { source: 'ds', target: 'dl', tech: 'tf.data' },
      { source: 'mlops', target: 'ds', tech: 'Pandas' },
      { source: 'cv', target: 'genai', tech: 'AutoEncoders' },
      { source: 'nlp', target: 'genai', tech: 'VAE' },
    ]
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const width = svgRef.current.clientWidth;
    const height = 500;
    const svg = d3.select(svgRef.current)
      .attr('viewBox', [0, 0, width, height]);

    svg.selectAll('*').remove();

    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force('link', d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(120))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1));

    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', '#333');

    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(data.nodes)
      .join('g')
      .attr('class', 'node')
      .call(drag(simulation) as any);

    node.append('circle')
      .attr('r', 8)
      .attr('fill', d => d.color)
      .attr('stroke', d => `${d.color}44`)
      .on('mouseover', (event, d) => {
        setHoveredNode(d);
        d3.select(event.currentTarget).transition().attr('r', 12);
      })
      .on('mouseout', (event) => {
        setHoveredNode(null);
        d3.select(event.currentTarget).transition().attr('r', 8);
      })
      .on('click', () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
      });

    node.append('text')
      .attr('dy', -15)
      .attr('text-anchor', 'middle')
      .text(d => d.label);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

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

    return () => simulation.stop();
  }, [data.nodes, data.links]);

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-orange-500 font-black mb-6">Neural Knowledge Graph</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter">Live AI Domain Map</h3>
            <p className="text-neutral-500 mt-6 leading-relaxed text-lg font-light">
              Interactive visualization of the interconnected neural landscape. Nodes represent research clusters, while edges indicate shared technologies like TensorFlow, Transformers, and MLOps pipelines.
            </p>
          </div>
          
          <div className="shrink-0">
             <div className="glass p-6 rounded-2xl border-white/10 min-w-[280px]">
                {hoveredNode ? (
                  <div className="animate-in fade-in slide-in-from-right-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: hoveredNode.color }}></div>
                      <h4 className="font-bold text-lg uppercase tracking-tight">{hoveredNode.label}</h4>
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed font-medium">{hoveredNode.description}</p>
                    <div className="mt-4 pt-4 border-t border-white/5">
                       <span className="text-[10px] text-orange-500 font-black uppercase tracking-widest">Protocol Active</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-neutral-600">
                    <svg className="w-8 h-8 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                    <p className="text-[10px] uppercase tracking-widest font-black">Hover Nodes to Inspect</p>
                  </div>
                )}
             </div>
          </div>
        </div>

        <div className="relative glass rounded-[3rem] border-white/5 bg-white/[0.01] overflow-hidden cursor-crosshair">
          <svg ref={svgRef} className="w-full h-[500px]"></svg>
          <div className="absolute bottom-10 left-10 flex gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Core Intelligence
             </div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Applied Science
             </div>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Infrastructure
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainMap;
