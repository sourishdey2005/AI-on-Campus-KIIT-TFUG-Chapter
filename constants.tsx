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
      { name: 'Large Language Models (LLMs)', details: 'Mastering PEFT, QLoRA, and full-parameter fine-tuning of Gemma 2 and Llama 3. Project Idea: Developing a "Code-Gemma" variant fine-tuned specifically for legacy KIIT campus management system languages.' },
      { name: 'Retrieval-Augmented Generation (RAG)', details: 'Architecting multi-stage retrieval pipelines with semantic rerankers and graph-based memory. Project Idea: Building a Campus Knowledge Graph RAG that answers complex administrative queries with 99% accuracy.' },
      { name: 'Multi-modal Foundation Models', details: 'Developing unified encoders for visual-language grounding (VLM) using CLIP/PaLI architectures. Project Idea: Creating an automated lab-security assistant that can describe visual scenes in real-time to blind students.' },
      { name: 'Agentic AI & Tool Use', details: 'Building autonomous ReAct agents capable of complex tool-use and self-correction. Project Idea: An "Autonomous Research Assistant" that can search ArXiv, summarize papers, and draft LaTeX skeletons based on a prompt.' },
      { name: 'Diffusion & Creative Synthesis', details: 'Training LoRA adapters for Stable Diffusion and latent video models. Project Idea: Generating temporal-consistent drone-view videos of the KIIT campus for virtual tours using SVD (Stable Video Diffusion).' }
    ]
  },
  {
    id: 'dl-research',
    title: 'Deep Learning & Research Cluster',
    icon: '🔬',
    description: 'The "R&D" wing focusing on heavy lifting of model architecture and core intelligence.',
    color: 'from-orange-500/20 to-amber-500/20',
    domains: [
      { name: 'Computer Vision & Visual Perception', details: 'Visual perception using YOLOv10 and ViT for zero-shot detection. Project Idea: Implementing a SAM-based automated medical imaging segmentation pipeline for localized pathology detection.' },
      { name: 'Generative Vision & Neural Rendering', details: 'High-fidelity neural rendering and NeRFs for 3D reconstruction. Project Idea: Creating "Digital Twins" of campus labs using Instant-NGP to allow remote students to navigate physical equipment virtually.' },
      { name: 'Neural Language Architectures', details: 'Researching long-context sequence modeling using State-Space Models (Mamba). Project Idea: Benchmarking Mamba vs. Transformers for long-duration sensor data analysis from campus smart-grid meters.' },
      { name: 'Reinforcement Learning & Simulation', details: 'Training agents in MuJoCo simulations using PPO and SAC. Project Idea: Training a quadruped robot agent to navigate the irregular terrain of the campus gardens using curiosity-driven exploration.' },
      { name: 'Optimization & Neural Search', details: 'Developing custom training loops with gradient surgery and NAS. Project Idea: Designing a hardware-aware NAS to find the smallest possible CNN that can detect face-masks on low-power ESP32-S3 chips.' }
    ]
  },
  {
    id: 'ds-analytics',
    title: 'Data Science & Analytics Cluster',
    icon: '📊',
    description: 'The "Foundation" focusing on the data lifecycle that feeds the models.',
    color: 'from-blue-500/20 to-cyan-500/20',
    domains: [
      { name: 'Big Data Engineering', details: 'Orchestrating petabyte-scale data pipelines using tf.data and Apache Spark. Project Idea: Building a real-time feature store for the campus canteen to predict and reduce food wastage by 30%.' },
      { name: 'Statistical Inference & Causality', details: 'Implementing Bayesian NNs for uncertainty and Causal Inference. Project Idea: Analyzing "Does library attendance cause higher CGPA?" using Causal Graphical Models to control for hidden confounders.' },
      { name: 'Bio-Informatics & AI for Science', details: 'Leveraging ML for protein structure prediction and diagnostics. Project Idea: Applying GNNs (Graph Neural Networks) to identify potential drug-target interactions for local rare diseases using AlphaFold 3 outputs.' },
      { name: 'Geo-Spatial & Climate Analytics', details: 'Analyzing multi-spectral satellite data for carbon tracking. Project Idea: Creating a high-resolution heat map of Bhubaneswar using Landsat-9 data to propose optimal locations for urban cooling zones.' }
    ]
  },
  {
    id: 'product-deploy',
    title: 'Product & Deployment Cluster',
    icon: '🚀',
    description: 'Turning models into functional, user-facing full-stack AI software.',
    color: 'from-green-500/20 to-emerald-500/20',
    domains: [
      { name: 'Web-ML & Browser Intelligence', details: 'Deploying high-performance models via TF.js with WebGPU acceleration. Project Idea: A browser-based real-time video background removal tool optimized for campus students on low-end laptops.' },
      { name: 'Mobile AI & Efficient Computing', details: 'Optimizing inference via Quantization-Aware Training (QAT). Project Idea: Building "KIIT-Scan," a mobile app that uses an on-device OCR model to digitize handwritten student notes in Odia and English.' },
      { name: 'Voice & Conversational UI', details: 'Building low-latency agents with streaming ASR and TTS. Project Idea: A voice-activated "Campus Navigator" for visually impaired visitors that provides turn-by-turn directions via localized audio cues.' },
      { name: 'XR & Spatial Computing', details: 'Integrating spatial AI for hand-tracking and scene understanding. Project Idea: An AR "Anatomy Lab" where medical students can interact with 3D organs overlaid on physical mannequins using Meta Quest 3.' }
    ]
  },
  {
    id: 'eng-ops',
    title: 'Engineering & Operations Cluster',
    icon: '⚙️',
    description: 'The "SRE Wing" focusing on production, hardware scaling, and security.',
    color: 'from-purple-500/20 to-pink-500/20',
    domains: [
      { name: 'MLOps & CI/CD Pipelines', details: 'Automating ML lifecycles with TFX and model monitoring. Project Idea: Setting up a centralized model-registry for all society projects with automated testing for data drift and model bias.' },
      { name: 'Cloud Infrastructure & Scaling', details: 'Scaling distributed training on K8s (GKE) and Vertex AI. Project Idea: Architecting a "Shared Compute Cluster" using idle GPU nodes to allow junior members to train models via a web interface.' },
      { name: 'Edge AI & TinyML Systems', details: 'Deploying on resource-constrained hardware like ESP32 and Coral TPU. Project Idea: Building a TinyML "Smart Parking" sensor that detects vehicle occupancy on-chip and sends updates via LoRaWAN.' },
      { name: 'AI Security & Robustness', details: 'Hardening models against adversarial attacks and prompt injection. Project Idea: Developing a "Firewall for LLMs" that intercepts and sanitizes user prompts before they reach the campus chatbot API.' }
    ]
  },
  {
    id: 'non-tech',
    title: 'Non-Tech & Creative Operations',
    icon: '🎨',
    description: 'The strategic backbone managing branding, talent, and organizational fluid dynamics.',
    color: 'from-yellow-400/20 to-orange-500/20',
    domains: [
      { name: 'Operations & Logistics', details: 'Managing end-to-end society logistics and symposiums. Project Idea: Designing a data-driven "Member Engagement Portal" to track activity participation and automated certificate issuance.' },
      { name: 'Marketing & Technical Branding', details: 'Crafting the society’s identity through high-impact outreach. Project Idea: Launching a "Humanizing AI" podcast series featuring interviews with Google Developer Experts and local KIIT researchers.' },
      { name: 'Photography & Visual Media', details: 'Documenting technical milestones and research showcases. Project Idea: Building an AI-curated digital photo gallery of all society events that automatically tags members using face-recognition.' },
      { name: 'Videography & Motion Graphics', details: 'Producing cinematic tech reels and animated explainers. Project Idea: Creating a series of "30-second Neural Explainers" using 3Blue1Brown-style animations for social media education.' },
      { name: 'HR & Talent Management', details: 'Orchestrating recruitment and fostering guild culture. Project Idea: Implementing a "Peer-to-Peer Rewards" system where members can nominate each other for technical excellence badges.' },
      { name: 'PR & Corporate Relations', details: 'Establishing strategic partnerships with industry leaders. Project Idea: Organizing "AI-Industry Connect" mixers where members can present their research artifacts directly to HRs of top tech firms.' }
    ]
  },
  {
    id: 'innovation',
    title: 'Innovation & Governance Cluster',
    icon: '🏛️',
    description: 'Managing the strategic, legal, and ethical side of technical leadership.',
    color: 'from-red-500/20 to-orange-500/20',
    domains: [
      { name: 'IPR, Patents & Publications', details: 'Navigating IP landscape for student inventions. Project Idea: A "Publication Accelerator" program that pairs junior researchers with senior mentors to draft and submit papers to CVPR or NeurIPS.' },
      { name: 'AI Ethics, Policy & Fairness', details: 'Drafting guidelines for unbiased and transparent models. Project Idea: Developing a "KIIT AI Fairness Toolkit" that tests student models for demographic parity and equalized odds across various groups.' },
      { name: 'Product Management for AI', details: 'Applying agile PM methodologies to AI development. Project Idea: A "Venture Studio" track within the guild to help student projects transition from lab-prototypes into viable campus-based startups.' }
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Community Cluster',
    icon: '🌍',
    description: 'The face of the guild to the global TensorFlow and industry ecosystem.',
    color: 'from-indigo-500/20 to-violet-500/20',
    domains: [
      { name: 'TFUG Global Liaison', details: 'Managing relations with Google Developers and TFUG chapters. Project Idea: Initiating a "Chapter-to-Chapter Exchange" where KIIT members collaborate on a joint project with a TFUG chapter in Europe or the US.' },
      { name: 'Technical Branding & Content', details: 'Curating blogs and whitepapers for thought leadership. Project Idea: Establishing the "KIIT AI Review," a quarterly digital journal featuring the best research and technical blogs from the guild.' },
      { name: 'Competitive AI & Sprints', details: 'Organizing Kaggle-style data competitions and research sprints. Project Idea: Hosting an annual "Campus Neural Cup," a 48-hour competition where students solve pressing social issues using only TensorFlow.' }
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
  { 
    name: 'Sunil Kumar Sawant', 
    role: 'FIC', 
    level: 0, 
    image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768279605/cd11e357-70b7-44a2-b538-b976caa08189_dvlya7.jpg' 
  },
  { name: 'Sourish Dey', role: 'President', level: 1, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232730/80b22f88-4f08-47a0-aa94-2117cbe80c9b_kbe1ph.jpg' },
  { name: 'Rounak Banerjee', role: 'Vice President', level: 2, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232565/db891764-0e08-4db4-8be9-caf904aa42b4_tkg91k.jpg' },
  { name: 'Anusmita Sahu', role: 'Vice President', level: 2, image: 'https://res.cloudinary.com/dodhvvewu/image/upload/v1768232581/6cb03a67-af26-4318-9a58-7b9b93422244_ux7z99.jpg' },
  { name: 'Domain POCs & coordinators', role: 'Technical Execution', level: 3 }
];