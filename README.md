# Raja Varun — Personal Brand & AI Engineering Portfolio

A modern, production-grade personal portfolio website engineered for **Raja Varun**, specializing in **AI, Machine Learning, and Data Science**.

Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**, strictly grounded in verified resume credentials.

---

## 🚀 Key Features

- **Dark Modern AI Developer Aesthetic**: Custom slate/cyan theme, glassmorphism panels, neural dot grid pattern, subtle glowing gradients.
- **Hero & Interactive CTAs**: Headline, personal statement, direct resume download/view modal, and copy email button.
- **Projects Showcase (Core Section)**:
  - **ColPali: OCR-Free Document Retrieval** (Qwen2-VL, FAISS, FastAPI, React.js)
  - **Plant Disease Detection System** (TensorFlow, Keras, OpenCV, 95%+ accuracy, Streamlit)
  - **Gesture-Based System Control** (Python, MediaPipe, OpenCV, PyAutoGUI, pycaw)
  - Interactive category filtering and deep-dive architecture modal for each project.
- **Verified Skills System**: Categorized into Programming Languages, Machine Learning & Vision, and Frameworks/Tools with click-to-copy technology badges.
- **Experience & Internships Timeline**: Accurate responsibilities and achievements for InAmigos Foundation and Talent Trek.
- **Education & Certifications**: MGIT Hyderabad B.Tech, Oracle AI Foundations Associate, AI Hackdays 2nd place.
- **Live GitHub Integration**: Fetches public repositories in real-time with primary language distribution and rate-limit fallbacks.
- **Direct Resume Integration**: The original `varun_resume_2.pdf` is hosted at `/varun_resume_2.pdf` for direct one-click download.
- **SEO & Social Metadata**: Pre-configured OpenGraph tags, semantic HTML5, accessible ARIA labels, and custom SVG favicon.

---

## ⚙️ Central Configuration

All links, social URLs, and handles are centrally managed in a single file:

```typescript
// src/config/site.ts
export const SITE_CONFIG = {
  NAME: 'Raja Varun',
  TITLE: 'AI / Machine Learning / Data Science Engineer',
  EMAIL: 'varun2006raja@gmail.com',
  PHONE: '+91-9849106126',
  LOCATION: 'Hyderabad, Telangana, India',
  COLLEGE: 'Mahatma Gandhi Institute of Technology, Hyderabad',
  DEGREE: 'B.Tech in Computer Science and Engineering (Data Science)',
  GRADUATION_YEAR: '2024 – 2027',

  // Configurable URLs & Usernames
  GITHUB_USERNAME: 'rajavarun', // Update with your exact GitHub handle
  LINKEDIN_URL: 'https://linkedin.com/in/rajavarun',
  PORTFOLIO_URL: 'https://rajavarun-portfolio.vercel.app', // Update when deployed
  RESUME_URL: '/varun_resume_2.pdf',
};
```

---

## 🛠️ Local Development & Build

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this `portfolio` repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import the `portfolio` repository.
4. Framework preset: **Vite**.
5. Click **"Deploy"**. Vercel will build and assign you a production URL (e.g., `https://raja-varun.vercel.app`).
6. Update `PORTFOLIO_URL` in `src/config/site.ts` with your live URL.

---

## 📄 LinkedIn Optimization Guide

A comprehensive, ready-to-use LinkedIn optimization package has been generated in:
👉 [`LINKEDIN_OPTIMIZATION.md`](file:///c:/Projectssss/portfolio/LINKEDIN_OPTIMIZATION.md)

It contains:
- 3 high-impact headline options tailored for AI/ML engineering roles
- Authentic, recruiter-friendly About section
- Formatted experience, education, and project sections
- Featured section linking instructions
- 6 ready-to-publish authentic LinkedIn post drafts (Launch, ColPali deep-dive, CV plant detection, MediaPipe touchless navigation, AI journey, Hackathon reflection)
