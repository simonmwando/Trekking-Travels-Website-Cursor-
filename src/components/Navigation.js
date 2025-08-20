import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import logo from '../Logo green horizontal.svg';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'services', text: 'Services' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}
      variant="dark"
    >
        <Container>
          <NavbarBrand 
            className="brand-logo" 
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          >
            <img src={logo} alt="Trekking Travels Logo" className="logo-image" />
          </NavbarBrand>
          
          <NavbarToggle aria-controls="basic-navbar-nav">
            <FaBars />
          </NavbarToggle>
          
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <Nav.Link 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
  );
};

export default Navigation; 