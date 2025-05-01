import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <Header />
        <AnimatePresence>
          <main className="container mx-auto px-4">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Accomplishments />
            <Contact />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;