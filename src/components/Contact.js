import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "#28a745"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["info@trekkingtravels.com", "bookings@trekkingtravels.com"],
      color: "#007bff"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office",
      details: ["123 Adventure Street", "Mountain View, CA 94041"],
      color: "#dc3545"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "#ffc107"
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your next adventure? Contact us today and let's plan your perfect trekking experience.
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info">
              <h4 className="contact-info-title">Contact Information</h4>
              <p className="contact-info-subtitle">
                We're here to help you plan your perfect adventure. Reach out to us through any of these channels.
              </p>
              
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div 
                      className="contact-icon"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h6>{item.title}</h6>
                      {item.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          
          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body>
                <h4 className="form-title">Send Us a Message</h4>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="custom">Custom Trip</option>
                          <option value="support">Customer Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your adventure plans..."
                    />
                  </Form.Group>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="submit-btn"
                  >
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className="map-container">
              <h4 className="map-title">Find Us</h4>
              <div className="map-placeholder">
                <div className="map-overlay">
                  <p>Interactive Google Map</p>
                  <small>Click to view our location</small>
                </div>
                <div 
                  className="map-background"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                  }}
                ></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 