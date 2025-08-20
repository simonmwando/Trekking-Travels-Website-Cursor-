import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlane, FaUsers, FaMicrophone, FaGift, FaPassport, FaShieldAlt, FaGlobe, FaSuitcase, FaCar, FaGraduationCap, FaFutbol, FaShuttleVan, FaPray } from 'react-icons/fa';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HostelCard from './components/HostelCard';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="hostels">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title">Suggestions</h2>
              <p className="section-subtitle">Discover amazing places to stay around the world</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="11th Avenue Hostel"
                rating={4.8}
                price={96}
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80"
                altText="Modern hostel lobby"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Downtown Backpackers"
                rating={4.6}
                price={78}
                image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2070&q=80"
                altText="Cozy hostel common area"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Mountain View Lodge"
                rating={4.9}
                price={112}
                image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80"
                altText="Scenic mountain hostel"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <HostelCard 
                name="Beachside Bunkhouse"
                rating={4.7}
                price={89}
                image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2070&q=80"
                altText="Beach hostel with ocean view"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="packages">
        <WhyChooseUs />
      </section>
                    <section id="services" className="why-choose-us-section">
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8} className="text-center mb-5">
                      <h2 className="section-title">Our Services</h2>
                      <p className="section-subtitle">
                        Comprehensive travel and trekking solutions for all your adventure needs
                      </p>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaPlane />
                          </div>
                          <h5 className="reason-title">Airline Reservation & Ticketing</h5>
                          <p className="reason-description">Immediate reservations and ticketing for over 130 global airlines.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaUsers />
                          </div>
                          <h5 className="reason-title">Meetings, Incentives & Corporate Events</h5>
                          <p className="reason-description">Comprehensive management of M.I.C.E. events and corporate functions.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaMicrophone />
                          </div>
                          <h5 className="reason-title">Conferences</h5>
                          <p className="reason-description">Assistance in executing corporate events, including company-wide conferences and product launches.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaGift />
                          </div>
                          <h5 className="reason-title">Incentive Travel</h5>
                          <p className="reason-description">Strategic implementation of incentive programs to foster loyalty and motivation.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaPassport />
                          </div>
                          <h5 className="reason-title">Visas</h5>
                          <p className="reason-description">Visa processing for a selection of countries in Africa and globally.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaShieldAlt />
                          </div>
                          <h5 className="reason-title">Travel Insurance</h5>
                          <p className="reason-description">Mandatory travel insurance included in all travel, underwritten by a reputable provider.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaGlobe />
                          </div>
                          <h5 className="reason-title">Group Travel</h5>
                          <p className="reason-description">24/7 global travel support with local management for continuous assistance.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaSuitcase />
                          </div>
                          <h5 className="reason-title">Holiday Packages</h5>
                          <p className="reason-description">A diverse selection from cost-effective to bespoke itineraries.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaCar />
                          </div>
                          <h5 className="reason-title">Car Rental Services</h5>
                          <p className="reason-description">A diverse fleet including sedans, 4x4s, standard buses, and luxury coaches.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaGraduationCap />
                          </div>
                          <h5 className="reason-title">Student Travel</h5>
                          <p className="reason-description">Competitive airfares, exclusive packages, extra baggage allowances, and student travel insurance.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaFutbol />
                          </div>
                          <h5 className="reason-title">Sport Adventure Travel</h5>
                          <p className="reason-description">Arranges sporting trips for individuals and groups.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaShuttleVan />
                          </div>
                          <h5 className="reason-title">Airport Transfers</h5>
                          <p className="reason-description">Pre-booked airport transfers for a seamless travel experience.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                      <Card className="reason-card h-100">
                        <Card.Body className="text-center">
                          <div className="icon-container">
                            <FaPray />
                          </div>
                          <h5 className="reason-title">Religious Travel</h5>
                          <p className="reason-description">Curated travel packages for religious travelers to popular destinations.</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
       
       export default App;
