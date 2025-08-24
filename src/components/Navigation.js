import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import logo from '../Logo green horizontal.svg';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home', path: '/' },
    { id: 'services', text: 'Services', path: '/services' },
    { id: 'about', text: 'About', path: '/#about' },
    { id: 'contact', text: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (link) => {
    if (link.path === '/') {
      navigate('/');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    } else if (link.path === '/services') {
      navigate('/services');
    } else if (link.path.startsWith('/#')) {
      // If we're not on home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll to section
        setTimeout(() => {
          const sectionId = link.path.substring(2);
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      } else {
        // Already on home page, just scroll to section
        const sectionId = link.path.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
            onClick={() => handleNavClick({ path: '/' })}
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
                  onClick={() => handleNavClick(link)}
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