import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Chatbot from './components/chatbot/Chatbot';
import './components/chatbot/Chatbot.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chatbot />
    </Layout>
  );
}

export default App;
