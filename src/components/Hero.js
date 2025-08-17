import React from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <Container className="hero-content">
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h1 className="hero-title">
              Find Your Adventurous Side!
            </h1>
            
            <div className="hero-search">
              <Form className="d-flex justify-content-center">
                <div className="search-input-group">
                  <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <FormControl
                      type="search"
                      placeholder="Search for a Destination, Hotel etc"
                      className="search-input"
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