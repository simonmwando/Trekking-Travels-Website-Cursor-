import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt, FaUsers, FaMapMarkedAlt, FaHeart } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Safety First",
      description: "Your safety is our top priority. All our guides are certified and equipped with emergency protocols and first-aid training."
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Expert Guides",
      description: "Our experienced local guides have extensive knowledge of the trails, culture, and environment of each destination."
    },
    {
      id: 3,
      icon: <FaMapMarkedAlt />,
      title: "Unique Routes",
      description: "We offer carefully curated routes that take you off the beaten path to discover hidden gems and authentic experiences."
    },
    {
      id: 4,
      icon: <FaHeart />,
      title: "Personal Touch",
      description: "Small group sizes ensure personalized attention and create meaningful connections with fellow travelers."
    }
  ];

  return (
    <section className="why-choose-us-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Why Choose Trekking Travels</h2>
            <p className="section-subtitle">
              We're committed to providing exceptional trekking experiences that go beyond just hiking
            </p>
          </Col>
        </Row>
        
        <Row>
          {reasons.map((reason) => (
            <Col lg={3} md={6} className="mb-4" key={reason.id}>
              <Card className="reason-card h-100">
                <Card.Body className="text-center">
                  <div className="icon-container">
                    {reason.icon}
                  </div>
                  <h5 className="reason-title">{reason.title}</h5>
                  <p className="reason-description">{reason.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <div className="stats-container">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Destinations</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs; 