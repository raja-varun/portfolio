export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Multimodal AI' | 'Computer Vision & Deep Learning' | 'Human-Computer Interaction';
  date: string;
  technologies: string[];
  keyMetric?: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholderRepo?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  type: string;
  period: string;
  points: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  field?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  type: 'hackathon' | 'certification' | 'workshop';
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'colpali-retrieval',
    title: 'ColPali: OCR-Free Document Retrieval',
    subtitle: 'End-to-End Multimodal Vision-Language Document Retrieval Pipeline',
    category: 'Multimodal AI',
    date: 'Jun 2026',
    technologies: ['Qwen2-VL', 'FAISS', 'FastAPI', 'React.js', 'Python', 'Vector Search'],
    keyMetric: 'Zero OCR Error Propagation with Native Layout Preservation',
    overview:
      'Engineered an end-to-end OCR-free multimodal document retrieval system utilizing Qwen2-VL vision-language embeddings, FAISS vector indexing, FastAPI backend, and React.js frontend.',
    problem:
      'Traditional PDF retrieval depends on text extraction via OCR, which notoriously fails on complex multi-column layouts, figures, infographics, and tabular data, losing crucial semantic context.',
    solution:
      'Leveraged Qwen2-VL to encode full PDF pages directly into vision-language embeddings. Implemented FAISS for sub-second vector similarity retrieval while preserving visual context, charts, and tables.',
    highlights: [
      'Implemented semantic search using vision-language embeddings preserving tables, charts, and visual layouts.',
      'Constructed end-to-end PDF retrieval pipeline supporting document upload, page-level indexing, and query search.',
      'Achieved real-time search response via indexed FAISS vector search coupled with high-throughput FastAPI endpoints.',
      'Built a responsive, modern web interface with React.js for intuitive query exploration and document preview.'
    ],
    githubUrl: 'https://github.com/rajavarun/colpali-ocr-free-retrieval',
    isPlaceholderRepo: true
  },
  {
    id: 'plant-disease-detection',
    title: 'Plant Disease Detection System',
    subtitle: 'Deep Learning Vision Model with Multilingual Advisory for Farmers',
    category: 'Computer Vision & Deep Learning',
    date: 'Feb 2025',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit', 'Python', 'Multilingual UI'],
    keyMetric: '95%+ Accuracy Across 100,000+ Agricultural Images',
    overview:
      'Developed and deployed a high-accuracy convolutional deep learning system to diagnose crop diseases and provide instant remedy recommendations in English, Telugu, and Hindi.',
    problem:
      'Crop disease outbreaks cause significant agricultural loss, while smallholder farmers frequently lack timely botanical pathology expertise or accessible tools in their native languages.',
    solution:
      'Trained deep convolutional neural networks with TensorFlow/Keras on over 100,000 plant pathology images. Deployed an accessible Streamlit app with regional language options and remedy advice.',
    highlights: [
      'Trained and evaluated deep learning models achieving 95%+ classification accuracy across 100,000+ images.',
      'Implemented computer vision preprocessing, noise reduction, and augmentation pipelines with OpenCV.',
      'Deployed multilingual web application via Streamlit supporting Telugu, Hindi, and English.',
      'Integrated practical remedy and management recommendations to empower farmers and home gardeners.'
    ],
    githubUrl: 'https://github.com/rajavarun/plant-disease-detection',
    isPlaceholderRepo: true
  },
  {
    id: 'gesture-system-control',
    title: 'Gesture-Based System Control',
    subtitle: 'Real-Time Touchless Human-Computer Interface via Computer Vision',
    category: 'Human-Computer Interaction',
    date: 'Jun 2025',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'pycaw', 'Windows API'],
    keyMetric: 'Real-Time 21-Point Landmark Hand Tracking & OS Control',
    overview:
      'Developed a touchless system control application that tracks hand landmarks in real time via webcam and translates dynamic gestures into operating system commands.',
    problem:
      'Standard peripherals require physical touch, which is inconvenient in sterile, hands-busy, or accessibility-constrained environments.',
    solution:
      'Utilized Google MediaPipe and OpenCV for real-time 21-point hand landmark detection. Mapped gesture states to low-level Windows APIs via PyAutoGUI, pycaw, and screen-brightness control.',
    highlights: [
      'Real-time hand gesture tracking using OpenCV and Google MediaPipe for instantaneous touchless response.',
      'Engineered smooth gesture controls for volume, screen brightness, window scrolling, navigation, and zoom.',
      'Integrated native Windows controls seamlessly through pycaw (Core Audio) and PyAutoGUI.',
      'Optimized frame processing pipeline for consistent high FPS and negligible CPU overhead.'
    ],
    githubUrl: 'https://github.com/rajavarun/gesture-based-system-control',
    isPlaceholderRepo: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'InAmigos Foundation',
    role: 'AI Web Development Intern',
    location: 'Online',
    type: 'Internship',
    period: 'May 2026 – Jun 2026',
    points: [
      'Participated in brainstorming sessions focused on improving website UI/UX and enhancing overall user experience.',
      'Analyzed how website elements and design decisions directly influence consumer interaction and engagement.',
      'Explored the integration of AI-powered features into web platforms to deliver more personalized user experiences.'
    ],
    skills: ['UI/UX Analysis', 'AI Feature Integration', 'Web Development', 'User Engagement']
  },
  {
    company: 'Talent Trek',
    role: 'Artificial Intelligence Intern',
    location: 'Online',
    type: 'Internship',
    period: 'Aug 2025 – Nov 2025',
    points: [
      'Completed hands-on training in Machine Learning and Deep Learning, covering fundamental concepts and neural network architectures.',
      'Developed and implemented a neural network project, applying model training, validation, and evaluation to a practical problem.'
    ],
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Model Evaluation']
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Mahatma Gandhi Institute of Technology, Hyderabad',
    degree: 'B.Tech, Computer Science and Engineering (Data Science)',
    field: 'Data Science & Artificial Intelligence',
    period: '2024 – 2027'
  },
  {
    institution: 'Amogha Jr College',
    degree: 'XII (MPC — Mathematics, Physics, Chemistry)',
    period: '2022 – 2023'
  },
  {
    institution: 'Vignana Jyothi Public School',
    degree: 'X (Secondary School)',
    period: '2020 – 2021'
  }
];

export const ACHIEVEMENTS_CERTIFICATIONS: Certification[] = [
  {
    title: '2nd Place – AI Hackdays Hackathon (2025)',
    issuer: 'AI Hackdays',
    date: '2025',
    type: 'hackathon',
    highlight: true
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    type: 'certification',
    highlight: true
  },
  {
    title: 'Introduction to Generative AI Studio',
    issuer: 'Google Cloud',
    date: '2024/2025',
    type: 'certification',
    highlight: false
  },
  {
    title: 'Python Using AI Workshop',
    issuer: 'AI for Techies',
    date: '2024/2025',
    type: 'workshop',
    highlight: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages for AI systems, data pipelines, and backend logic',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'C' },
      { name: 'R' }
    ]
  },
  {
    category: 'Machine Learning & Computer Vision',
    description: 'Deep learning frameworks, computer vision libraries, and vector search',
    skills: [
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'PyTorch' },
      { name: 'OpenCV' },
      { name: 'MediaPipe' },
      { name: 'FAISS' }
    ]
  },
  {
    category: 'Frameworks & Technologies',
    description: 'Modern full-stack, deployment, automation, and data visualization tools',
    skills: [
      { name: 'FastAPI' },
      { name: 'React.js' },
      { name: 'Streamlit' },
      { name: 'Docker' },
      { name: 'n8n' },
      { name: 'Tableau' },
      { name: 'PyAutoGUI' },
      { name: 'pycaw' }
    ]
  }
];
