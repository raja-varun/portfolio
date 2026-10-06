/**
 * Central Configuration for Raja Varun's Portfolio
 * Edit constants here to update links, usernames, and site-wide metadata.
 */

export const SITE_CONFIG = {
  NAME: 'Raja Varun',
  TITLE: 'AI / Machine Learning / Data Science Engineer',
  EMAIL: 'varun2006raja@gmail.com',
  PHONE: '+91-9849106126',
  LOCATION: 'Hyderabad, Telangana, India',
  COLLEGE: 'Mahatma Gandhi Institute of Technology, Hyderabad',
  DEGREE: 'B.Tech in Computer Science and Engineering (Data Science)',
  GRADUATION_YEAR: '2024 – 2027',
  
  // Central URLs and Handles
  GITHUB_USERNAME: 'raja-varun', // Replace with your exact GitHub handle if different
  LINKEDIN_URL: 'https://linkedin.com/in/rajavarun',
  PORTFOLIO_URL: 'https://portfolio-teal-ten-9klv2nzl2d.vercel.app',
  RESUME_URL: '/varun_resume_2.pdf', // Direct link to verified resume in /public

  // Open Graph & SEO
  SITE_NAME: 'Raja Varun Portfolio',
  SITE_DESCRIPTION: 'Portfolio of Raja Varun — AI, Machine Learning, and Data Science Engineer specializing in Multimodal Document Retrieval, Computer Vision, and Real-Time Intelligent Systems.',
  SITE_KEYWORDS: [
    'Raja Varun',
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Science',
    'Computer Vision',
    'Deep Learning',
    'ColPali',
    'Multimodal AI',
    'Qwen2-VL',
    'FAISS',
    'FastAPI',
    'React',
    'Python',
    'TensorFlow',
    'PyTorch',
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;
