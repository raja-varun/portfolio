import { lazy, Suspense, useCallback, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { GitHubSection } from './components/GitHubSection';
import { EducationAchievements } from './components/EducationAchievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const ResumeModal = lazy(() => import('./components/ResumeModal').then(({ ResumeModal: Modal }) => ({ default: Modal })));

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeModalLoaded, setResumeModalLoaded] = useState(false);

  const handleOpenResume = useCallback(() => {
    setResumeModalLoaded(true);
    setResumeModalOpen(true);
  }, []);

  const handleCloseResume = useCallback(() => {
    setResumeModalOpen(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Subtle Editorial Ambient Grid & Light Field */}
      <AmbientBackground />

      {/* Floating Navigation */}
      <Navbar onDownloadResume={handleOpenResume} />

      {/* Main Content Flow */}
      <main className="relative z-10 flex-1">
        <Hero onDownloadResume={handleOpenResume} />
        <About />
        <Projects />
        <Skills />
        <ExperienceSection />
        <GitHubSection />
        <EducationAchievements />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Resume Modal */}
      {resumeModalLoaded && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={handleCloseResume}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
