import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
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
                     {/* Desktop Navigation */}
                     <div className="secondary-nav-links desktop-nav">
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
                       <div className="hotel-lodges-group">
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
                       </div>
                       <button 
                         className={`secondary-nav-link ${selectedNav === 'promo' ? 'active' : ''}`}
                         onClick={() => handleNavClick('promo')}
                       >
                         Promo
                       </button>
                     </div>
                     
                     {/* Mobile Dropdown Navigation */}
                     <div className="mobile-nav">
                       <div className="mobile-nav-container">
                         <span className="filter-label">Filter</span>
                         <Dropdown onSelect={(eventKey) => handleNavClick(eventKey)}>
                           <Dropdown.Toggle className="mobile-nav-dropdown">
                             {selectedNav === 'search-all' ? 'Search all' :
                              selectedNav === 'international' ? 'International packages' :
                              selectedNav === 'local' ? 'Local packages' :
                              selectedNav === 'hotel' ? 'Hotel' :
                              selectedNav === 'lodges' ? 'Lodges' :
                              selectedNav === 'promo' ? 'Promo' : 'Select option'}
                             <FaChevronDown className="dropdown-arrow" />
                           </Dropdown.Toggle>
                           
                           <Dropdown.Menu className="mobile-dropdown-menu">
                             <Dropdown.Item eventKey="search-all" className={selectedNav === 'search-all' ? 'active' : ''}>
                               Search all
                             </Dropdown.Item>
                             <Dropdown.Item eventKey="international" className={selectedNav === 'international' ? 'active' : ''}>
                               International packages
                             </Dropdown.Item>
                             <Dropdown.Item eventKey="local" className={selectedNav === 'local' ? 'active' : ''}>
                               Local packages
                             </Dropdown.Item>
                             <Dropdown.Item eventKey="hotel" className={selectedNav === 'hotel' ? 'active' : ''}>
                               Hotel
                             </Dropdown.Item>
                             <Dropdown.Item eventKey="lodges" className={selectedNav === 'lodges' ? 'active' : ''}>
                               Lodges
                             </Dropdown.Item>
                             <Dropdown.Item eventKey="promo" className={selectedNav === 'promo' ? 'active' : ''}>
                               Promo
                             </Dropdown.Item>
                           </Dropdown.Menu>
                         </Dropdown>
                       </div>
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