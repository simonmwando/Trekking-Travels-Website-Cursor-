import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                Trekking Travel and Tours, situated in Lusaka, stands as a dynamic Travel and Tour Agency led by a team of enthusiastic and dedicated individuals deeply passionate about travel and tourism. Their fervor extends to sharing the wonders of Zambia and the broader world with both local and global audiences.
              </p>
              
              <p className="about-description">
                Boasting a wealth of over 20 years of experience in the field, Trekking Travels and Tours offers unparalleled services in the Travel and Tourism Industry, ensuring a top-notch experience for their clientele.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>20+ Years of Experience</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Based in Lusaka, Zambia</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Local & Global Tourism</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Passionate Team</span>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="podcast-preview">
              <h3 className="podcast-title">🎙️ Trekking Podcast</h3>
              <p className="podcast-description">
                Join us on our exciting trekking adventures through our podcast! We share stories, tips, and insights from our travels across Zambia and around the world.
              </p>
              
              <div className="video-preview-container">
                <div className="video-preview">
                  <div className="video-overlay">
                    <a 
                      href="https://www.youtube.com/@trekkingtravels" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="play-button-overlay"
                    >
                      <FaPlay />
                    </a>
                  </div>
                  <div 
                    className="video-background"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1598488035139-bdaa7543d4f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="podcast-cta">
                <a 
                  href="https://www.youtube.com/@trekkingtravels" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="podcast-button"
                >
                  Watch on YouTube
                  <FaArrowRight className="ms-2" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 