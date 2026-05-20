import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy load pages for code splitting
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const Chatbot = lazy(() => import('./components/chatbot/Chatbot.jsx'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </Layout>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
