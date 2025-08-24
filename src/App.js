import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HostelCard from './components/HostelCard';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HostelDetail from './components/HostelDetail';
import ServicesPage from './components/ServicesPage';
import './App.css';

// Home page component
const HomePage = () => (
  <>
      <section id="home">
        <Hero />
      </section>
      <section id="hostels">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title">Suggestions</h2>
              <p className="section-subtitle">Discover amazing places to stay around the world</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="11th Avenue Hostel"
                rating={4.8}
                price={96}
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
                altText="Modern hostel lobby"
              slug="11th-avenue-hostel"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Downtown Backpackers"
                rating={4.6}
                price={78}
                image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80"
                altText="Cozy hostel common area"
                slug="downtown-backpackers"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Mountain View Lodge"
                rating={4.9}
                price={112}
                image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80"
                altText="Scenic mountain hostel"
              slug="mountain-view-lodge"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Beachside Bunkhouse"
                rating={4.7}
                price={89}
                image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2070&q=80"
                altText="Beach hostel with ocean view"
              slug="beachside-bunkhouse"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="packages">
        <WhyChooseUs />
      </section>
    <section id="about">
      <About />
              </section>
      <section id="contact">
        <Contact />
      </section>
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
                       <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/hostel/:slug" element={<HostelDetail />} />
                 <Route path="/services" element={<ServicesPage />} />
               </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
    </Router>
  );
}
       
       export default App;
