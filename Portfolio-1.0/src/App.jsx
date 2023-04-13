import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    <Footer />
  </div>
);

export default App;
