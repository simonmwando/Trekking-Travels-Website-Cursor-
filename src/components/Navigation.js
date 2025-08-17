import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import logo from '../Logo green horizontal.svg';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'packages', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'packages', text: 'Packages' },
    { id: 'about', text: 'About' },
    { id: 'contact', text: 'Contact' }
  ];

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
                className={activeSection === link.id ? 'active' : ''}
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