
import React from 'react';
import { Cluster, Activity, TeamMember } from './types';

export const CLUSTERS: Cluster[] = [
  {
    id: 'genai-llm',
    title: 'Generative AI & LLM Cluster',
    icon: '✨',
    description: 'Specialized lab for Large Language Models, Multi-modal systems, and Agentic frameworks.',
    color: 'from-violet-600/30 to-fuchsia-600/30',
    domains: [
      { name: 'Large Language Models (LLMs)', details: 'Mastering fine-tuning, quantization (QLoRA), and model distillation.' },
      { name: 'Retrieval-Augmented Generation (RAG)', details: 'Vector databases, semantic search, and context window optimization.' },
      { name: 'Multi-modal Foundation Models', details: 'Architectures combining vision, audio, and text (e.g., Gemini-class systems).' },
      { name: 'Agentic AI & Tool Use', details: 'Building autonomous agents using LangChain, CrewAI, and function calling.' },
      { name: 'Diffusion & Creative Synthesis', details: 'Latent diffusion models, LoRA training, and controlled image/video generation.' }
    ]
  },
  {
    id: 'dl-research',
    title: 'Deep Learning & Research Cluster',
    icon: '🔬',
    description: 'The "R&D" wing focusing on heavy lifting of model architecture and core intelligence.',
    color: 'from-orange-500/20 to-amber-500/20',
    domains: [
      { name: 'Computer Vision & Visual Perception (CVVP)', details: 'CNNs, Vision Transformers (ViTs), and real-time segmentation.' },
      { name: 'Generative Vision & Image Processing (GVIP)', details: 'GANs, Autoencoders, and Image-to-Image translation.' },
      { name: 'Neural Language Architectures (NLA)', details: 'RNNs, LSTMs, and evolution of multi-head attention mechanisms.' },
      { name: 'Reinforcement Learning & Game Theory (RLGT)', details: 'Policy gradients, Q-learning, and robotics simulation.' },
      { name: 'Optimization & Meta-Learning', details: 'Custom loss functions, hyper-parameter search, and learning-to-learn.' }
    ]
  },
  {
    id: 'ds-analytics',
    title: 'Data Science & Analytics Cluster',
    icon: '📊',
    description: 'The "Foundation" focusing on the data lifecycle that feeds the models.',
    color: 'from-blue-500/20 to-cyan-500/20',
    domains: [
      { name: 'Big Data Engineering (BDE)', details: 'Scalable pipelines, data warehousing, and tf.data optimization.' },
      { name: 'Statistical Analysis & Inference (SAI)', details: 'Hypothesis testing, Bayesian inference, and probability distributions.' },
      { name: 'Bio-Informatics & Scientific Computing (BISC)', details: 'AI for protein folding, genomic data, and healthcare diagnostics.' },
      { name: 'Geo-Spatial & Environmental Analytics (GEA)', details: 'AQI prediction, satellite imagery, and climate modeling.' }
    ]
  },
  {
    id: 'product-deploy',
    title: 'Product & Deployment Cluster',
    icon: '🚀',
    description: 'Turning models into functional, user-facing full-stack AI software.',
    color: 'from-green-500/20 to-emerald-500/20',
    domains: [
      { name: 'Web-ML & Browser Intelligence', details: 'TensorFlow.js in high-performance React/Next.js environments.' },
      { name: 'Mobile AI & Intelligent Apps', details: 'TF Lite for on-device inference in Flutter/Android/iOS.' },
      { name: 'Voice & Conversational UI (VCUI)', details: 'Speech-to-text, text-to-speech, and low-latency voice assistants.' },
      { name: 'XR & Spatial Computing', details: 'Integrating AI with Unity/Unreal for immersive AR/VR experiences.' }
    ]
  },
  {
    id: 'eng-ops',
    title: 'Engineering & Operations Cluster',
    icon: '⚙️',
    description: 'The "SRE Wing" focusing on production, hardware scaling, and security.',
    color: 'from-purple-500/20 to-pink-500/20',
    domains: [
      { name: 'MLOps & Production Pipelines', details: 'CI/CD, model versioning, and automated retraining loops.' },
      { name: 'Cloud Infrastructure & Serverless AI', details: 'Scaling on GCP/AWS using Kubernetes and Docker orchestration.' },
      { name: 'Edge AI & Embedded Systems', details: 'AI on Drones, Raspberry Pi, and NVIDIA Jetson Nano hardware.' },
      { name: 'AI Security & Zero Trust', details: 'Adversarial attacks, robustification, and sensitive data privacy.' }
    ]
  },
  {
    id: 'non-tech',
    title: 'Non-Tech & Creative Operations',
    icon: '🎨',
    description: 'The strategic backbone managing branding, talent, and organizational fluid dynamics.',
    color: 'from-yellow-400/20 to-orange-500/20',
    domains: [
      { name: 'Operations & Logistics', details: 'End-to-end event management, venue coordination, and scheduling.' },
      { name: 'Marketing & Technical Branding', details: 'Managing social presence, campaigns, and high-impact outreach.' },
      { name: 'Photography & Visual Media', details: 'Capturing moments and creating visual artifacts of technical milestones.' },
      { name: 'Videography & Motion Graphics', details: 'Producing tech reels, documentaries, and animated explainers.' },
      { name: 'HR & Talent Management', details: 'Selection process, member engagement, and internal culture.' },
      { name: 'PR & Corporate Relations', details: 'Liaising with industry partners and TFUG global mentors.' }
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation & Governance Cluster',
    icon: '🏛️',
    description: 'Managing the strategic, legal, and ethical side of technical leadership.',
    color: 'from-red-500/20 to-orange-500/20',
    domains: [
      { name: 'IPR, Patents & Research Publication', details: 'Documenting inventions for international journals and patents.' },
      { name: 'AI Ethics, Policy & Fairness', details: 'Ensuring models are unbiased, transparent, and responsible.' },
      { name: 'Product Management & UX for AI', details: 'User Experience and Strategy for seamless AI interactions.' }
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Community Cluster',
    icon: '🌍',
    description: 'The face of TF LAB to the global TensorFlow and industry ecosystem.',
    color: 'from-indigo-500/20 to-violet-500/20',
    domains: [
      { name: 'TFUG Global & Industry Liaison', details: 'Connecting KIIT with global Google Developers and TFUG chapters.' },
      { name: 'Technical Branding & Content', details: 'High-quality blogs, documentation, and technical reels.' },
      { name: 'Competitive AI & Hackathons', details: 'Kaggle-style competitions and internal research sprints.' }
    ]
  }
];

export const ACTIVITIES: Activity[] = [
  {
    title: 'Model-Building Challenges',
    icon: '🎯',
    description: 'Internal and external challenges involving computer vision and NLP tasks.',
    outcome: 'Real-world ML Experience'
  },
  {
    title: 'Notebook Review Sessions',
    icon: '📓',
    description: 'Deep-dives into advanced architectures and code auditing for peer learning.',
    outcome: 'Coding Best Practices'
  },
  {
    title: 'TF Study Jams',
    icon: '🔥',
    description: 'Focused sessions on CNNs, Transformers, and MLOps workflows.',
    outcome: 'Continuous Learning'
  },
  {
    title: 'Collaborative Projects',
    icon: '🤝',
    description: 'End-to-end portfolio projects from data collection to edge deployment.',
    outcome: 'Portfolio Readiness'
  }
];

export const ORG_CHART: TeamMember[] = [
  { name: 'Faculty In-Charge', role: 'Institutional Oversight', level: 0 },
  { name: 'Faculty Advisor', role: 'Academic Coordination', level: 1 },
  { name: 'President & Vice President', role: 'Vision & Growth', level: 2 },
  { name: 'Technical & Non-Tech Leads', role: 'Operational Excellence', level: 3 },
  { name: 'Domain POCs & Coordinators', role: 'Execution & Liaison', level: 4 }
];
