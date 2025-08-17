import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PackagesGrid from './components/PackagesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="packages">
        <PackagesGrid />
      </section>
      <WhyChooseUs />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
