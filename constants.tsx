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
      { name: 'Large Language Models (LLMs)', details: 'Mastering PEFT, QLoRA, and full-parameter fine-tuning of open-weights models like Gemma 2 and Llama 3 for domain-specific tasks.' },
      { name: 'Retrieval-Augmented Generation (RAG)', details: 'Architecting multi-stage retrieval pipelines with semantic rerankers, hybrid search (BM25 + Vector), and graph-based memory storage.' },
      { name: 'Multi-modal Foundation Models', details: 'Developing unified encoders for visual-language grounding (VLM) and cross-modal reasoning using CLIP and PaLI-style architectures.' },
      { name: 'Agentic AI & Tool Use', details: 'Building autonomous ReAct agents capable of complex tool-use, multi-step reasoning, and self-correction via reinforcement learning feedback loops.' },
      { name: 'Diffusion & Creative Synthesis', details: 'Training LoRA adapters for Stable Diffusion and exploring temporal consistency in latent video-generation models like SVD and AnimateDiff.' }
    ]
  },
  {
    id: 'dl-research',
    title: 'Deep Learning & Research Cluster',
    icon: '🔬',
    description: 'The "R&D" wing focusing on heavy lifting of model architecture and core intelligence.',
    color: 'from-orange-500/20 to-amber-500/20',
    domains: [
      { name: 'Computer Vision & Visual Perception', details: 'Real-time visual perception using YOLOv10 and Vision Transformers (ViT) for zero-shot object detection and Segment Anything (SAM) integration.' },
      { name: 'Generative Vision & Neural Rendering', details: 'High-fidelity neural rendering, NeRFs (Neural Radiance Fields), and GAN-based super-resolution for satellite and medical imagery enhancement.' },
      { name: 'Neural Language Architectures', details: 'Researching long-context sequence modeling using State-Space Models (SSM/Mamba) and advanced sparsity techniques in attention mechanisms.' },
      { name: 'Reinforcement Learning & Simulation', details: 'Training agents in high-fidelity simulations for robotics (MuJoCo) and multi-agent competitive environments using PPO and Soft Actor-Critic (SAC).' },
      { name: 'Optimization & Neural Search', details: 'Developing custom training loops with advanced gradient surgery, weight pruning, and automated Neural Architecture Search (NAS) for efficiency.' }
    ]
  },
  {
    id: 'ds-analytics',
    title: 'Data Science & Analytics Cluster',
    icon: '📊',
    description: 'The "Foundation" focusing on the data lifecycle that feeds the models.',
    color: 'from-blue-500/20 to-cyan-500/20',
    domains: [
      { name: 'Big Data Engineering', details: 'Orchestrating petabyte-scale data pipelines using tf.data, Apache Spark, and Google Cloud Dataflow for training-ready feature stores.' },
      { name: 'Statistical Inference & Causality', details: 'Implementing Bayesian neural networks for uncertainty estimation and exploring Causal Inference to distinguish correlation from causation in complex datasets.' },
      { name: 'Bio-Informatics & AI for Science', details: 'Leveraging ML for genomic sequencing, drug discovery, and medical diagnostic systems based on 3D protein structure prediction and folding.' },
      { name: 'Geo-Spatial & Climate Analytics', details: 'Analyzing multi-spectral satellite data for carbon footprint tracking and time-series forecasting of local environmental anomalies and disasters.' }
    ]
  },
  {
    id: 'product-deploy',
    title: 'Product & Deployment Cluster',
    icon: '🚀',
    description: 'Turning models into functional, user-facing full-stack AI software.',
    color: 'from-green-500/20 to-emerald-500/20',
    domains: [
      { name: 'Web-ML & Browser Intelligence', details: 'Deploying high-performance models in-browser using TF.js with WebGL/WebGPU acceleration for privacy-centric edge intelligence and real-time interaction.' },
      { name: 'Mobile AI & Efficient Computing', details: 'Optimizing on-device inference via Quantization-Aware Training (QAT) and hardware-specific pruning for TF Lite on mobile NPUs and TPUs.' },
      { name: 'Voice & Conversational UI', details: 'Building end-to-end low-latency conversational agents with streaming ASR (Automatic Speech Recognition) and emotive, high-fidelity TTS (Text-to-Speech).' },
      { name: 'XR & Spatial Computing', details: 'Integrating spatial AI for real-time hand-tracking, occlusion mapping, and semantic scene understanding in immersive AR/VR environments.' }
    ]
  },
  {
    id: 'eng-ops',
    title: 'Engineering & Operations Cluster',
    icon: '⚙️',
    description: 'The "SRE Wing" focusing on production, hardware scaling, and security.',
    color: 'from-purple-500/20 to-pink-500/20',
    domains: [
      { name: 'MLOps & CI/CD Pipelines', details: 'Automating the ML lifecycle with TFX (TensorFlow Extended), model monitoring for feature drift, and implementing blue-green deployment strategies.' },
      { name: 'Cloud Infrastructure & Scaling', details: 'Scaling distributed training and inference on Kubernetes (GKE) using KServe and serverless GPU architectures like Cloud Run and Vertex AI.' },
      { name: 'Edge AI & TinyML Systems', details: 'Deploying compressed models on resource-constrained hardware like ESP32, Coral TPU, and NVIDIA Jetson Nano for real-world IoT sensing.' },
      { name: 'AI Security & Robustness', details: 'Hardening models against adversarial attacks, prompt injection, and implementing differential privacy for sensitive dataset protection during training.' }
    ]
  },
  {
    id: 'non-tech',
    title: 'Non-Tech & Creative Operations',
    icon: '🎨',
    description: 'The strategic backbone managing branding, talent, and organizational fluid dynamics.',
    color: 'from-yellow-400/20 to-orange-500/20',
    domains: [
      { name: 'Operations & Logistics', details: 'Managing end-to-end society logistics, including technical symposiums, lab inventory, and member scheduling.' },
      { name: 'Marketing & Technical Branding', details: 'Crafting the society’s identity through high-impact technical outreach, social presence, and community engagement campaigns.' },
      { name: 'Photography & Visual Media', details: 'Documenting technical milestones and research showcases through professional photography and digital asset management.' },
      { name: 'Videography & Motion Graphics', details: 'Producing cinematic tech reels, research documentaries, and complex animated explainers for neural architectures.' },
      { name: 'HR & Talent Management', details: 'Orchestrating the multi-stage recruitment process, member evaluation frameworks, and fostering internal guild culture.' },
      { name: 'PR & Corporate Relations', details: 'Establishing strategic partnerships with industry leaders and maintaining active liaison with the global TensorFlow community.' }
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation & Governance Cluster',
    icon: '🏛️',
    description: 'Managing the strategic, legal, and ethical side of technical leadership.',
    color: 'from-red-500/20 to-orange-500/20',
    domains: [
      { name: 'IPR, Patents & Publications', details: 'Navigating the intellectual property landscape to document student inventions for international journals, conferences, and patent filings.' },
      { name: 'AI Ethics, Policy & Fairness', details: 'Drafting internal guidelines to ensure models are unbiased, transparent, and ethically aligned with global responsible AI standards.' },
      { name: 'Product Management for AI', details: 'Applying agile PM methodologies to AI development, focusing on user-centric design and product-market fit for lab innovations.' }
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Community Cluster',
    icon: '🌍',
    description: 'The face of the guild to the global TensorFlow and industry ecosystem.',
    color: 'from-indigo-500/20 to-violet-500/20',
    domains: [
      { name: 'TFUG Global Liaison', details: 'Managing relations with Google Developers and TFUG chapters worldwide to bring global opportunities to the KIIT campus.' },
      { name: 'Technical Branding & Content', details: 'Curating high-quality technical blogs, whitepapers, and documentation to establish the guild as a thought leader in ML.' },
      { name: 'Competitive AI & Sprints', details: 'Organizing Kaggle-style data competitions and rapid research sprints to gamify skill acquisition within the member base.' }
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
  { name: 'Sunil Kumar Sawant', role: 'FIC', level: 0 },
  { name: 'Sourish Dey', role: 'President', level: 1, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232730/80b22f88-4f08-47a0-aa94-2117cbe80c9b_kbe1ph.jpg' },
  { name: 'Rounak Banerjee', role: 'Vice President', level: 2, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232565/db891764-0e08-4db4-8be9-caf904aa42b4_tkg91k.jpg' },
  { name: 'Anusmita Sahu', role: 'Vice President', level: 2, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232581/6cb03a67-af26-4318-9a58-7b9b93422244_ux7z99.jpg' },
  { name: 'Domain POCs & coordinators', role: 'Technical Execution', level: 3 }
];