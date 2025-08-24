import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../Logo green horizontal.svg';
import iataLogo from '../IATALogo.svg';
import travelportLogo from '../TravelportLogo.svg';
import zambiaTravelAgencyLogo from '../ZambiatravelagencyLogo.svg';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar-custom')?.offsetHeight || 0;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const footerLinks = {
    company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Team', action: () => scrollToSection('about') },
      { name: 'Careers', action: () => scrollToSection('about') },
      { name: 'Press', action: () => scrollToSection('about') }
    ],
    services: [
      { name: 'Trekking Tours', action: () => scrollToSection('packages') },
      { name: 'Adventure Packages', action: () => scrollToSection('packages') },
      { name: 'Custom Trips', action: () => scrollToSection('packages') },
      { name: 'Group Tours', action: () => scrollToSection('packages') }
    ],
    support: [
      { name: 'Help Center', action: () => scrollToSection('contact') },
      { name: 'Contact Us', action: () => scrollToSection('contact') },
      { name: 'Safety Guidelines', action: () => scrollToSection('about') },
      { name: 'Travel Insurance', action: () => scrollToSection('about') }
    ],
    legal: [
      { name: 'Privacy Policy', action: () => window.open('/privacy', '_blank') },
      { name: 'Terms of Service', action: () => window.open('/terms', '_blank') },
      { name: 'Cookie Policy', action: () => window.open('/cookies', '_blank') },
      { name: 'Refund Policy', action: () => window.open('/refund', '_blank') }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaXTwitter />, url: 'https://x.com', label: 'X (Twitter)' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/1234567890', label: 'WhatsApp' }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
                             <div className="brand-logo">
                 <img src={logo} alt="Trekking Travels Logo" className="footer-logo-image" />
               </div>
               
               <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Company</h5>
            <Nav className="footer-nav">
              {footerLinks.company.map((link, index) => (
                <Nav.Link 
                  key={index} 
                  onClick={link.action} 
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Services</h5>
            <Nav className="footer-nav">
              {footerLinks.services.map((link, index) => (
                <Nav.Link 
                  key={index} 
                  onClick={link.action} 
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Support</h5>
            <Nav className="footer-nav">
              {footerLinks.support.map((link, index) => (
                <Nav.Link 
                  key={index} 
                  onClick={link.action} 
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-title">Legal</h5>
            <Nav className="footer-nav">
              {footerLinks.legal.map((link, index) => (
                <Nav.Link 
                  key={index} 
                  onClick={link.action} 
                  className="footer-link"
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
        
        {/* Accreditation and Membership Logos */}
        <Row className="accreditation-section">
          <Col className="text-center">
            <h6 className="accreditation-title">Accredited & Certified</h6>
            <div className="accreditation-logos">
              <div className="accreditation-logo">
                <img 
                  src={iataLogo}
                  alt="IATA Accredited" 
                  className="accreditation-image"
                />
                <span className="accreditation-label">IATA Accredited</span>
              </div>
              <div className="accreditation-logo">
                <img 
                  src={travelportLogo}
                  alt="Travelport Partner" 
                  className="accreditation-image"
                />
                <span className="accreditation-label">Travelport Partner</span>
              </div>
              <div className="accreditation-logo">
                <img 
                  src={zambiaTravelAgencyLogo}
                  alt="Zambia Travel Agency Member" 
                  className="accreditation-image"
                />
                <span className="accreditation-label">Zambia Travel Agency</span>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row className="footer-bottom">
          <Col md={6} className="text-center text-md-start">
            <p className="copyright">
              © {currentYear} Trekking Travels. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="footer-note">
              Made by TechCo
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 