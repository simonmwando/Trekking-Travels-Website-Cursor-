import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-content">
              <h2 className="section-title">About Trekking Travels</h2>
              <p className="about-description">
                Founded in 2008, Trekking Travels has been at the forefront of adventure tourism, 
                specializing in creating unforgettable trekking experiences across the globe. 
                Our passion for exploration and commitment to sustainable tourism has made us 
                a trusted name in the industry.
              </p>
              
              <p className="about-description">
                We believe that every journey should be more than just a physical challenge – 
                it should be a transformative experience that connects you with nature, culture, 
                and fellow adventurers. Our carefully crafted itineraries combine the thrill of 
                trekking with authentic cultural immersion.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>15+ Years of Experience</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Certified Local Guides</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Sustainable Tourism Practices</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>24/7 Support During Trips</span>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="about-media">
              <div className="video-container">
                <div className="video-placeholder">
                  <div className="video-overlay">
                    <Button 
                      variant="light" 
                      size="lg" 
                      className="play-button"
                    >
                      <FaPlay />
                    </Button>
                  </div>
                  <div 
                    className="video-background"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 