import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [selectedNav, setSelectedNav] = useState('search-all');

  const handleNavClick = (navId) => {
    setSelectedNav(navId);
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <Container className="hero-content">
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="hero-title">
              Find your next adventure
            </h1>
            
                               {/* Secondary Navigation Bar */}
                   <div className="hero-secondary-nav">
                     <div className="secondary-nav-links">
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'search-all' ? 'active' : ''}`}
                         onClick={() => handleNavClick('search-all')}
                       >
                         Search all
                       </button>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'international' ? 'active' : ''}`}
                         onClick={() => handleNavClick('international')}
                       >
                         International packages
                       </button>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'local' ? 'active' : ''}`}
                         onClick={() => handleNavClick('local')}
                       >
                         Local packages
                       </button>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'hotel' ? 'active' : ''}`}
                         onClick={() => handleNavClick('hotel')}
                       >
                         Hotel
                       </button>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'lodges' ? 'active' : ''}`}
                         onClick={() => handleNavClick('lodges')}
                       >
                         Lodges
                       </button>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'promo' ? 'active' : ''}`}
                         onClick={() => handleNavClick('promo')}
                       >
                         Promo
                       </button>
                     </div>
                   </div>
            
                        <div className="hero-search">
              <Form className="d-flex justify-content-center">
                <div className="search-input-group">
                  <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <FormControl className="search-input"
                      type="search"
                      placeholder="Search for a Destination, Hotel etc"
                      aria-label="Search adventures"
                    />
                  </div>
                  <Button variant="success" className="search-button">
                    Search
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 