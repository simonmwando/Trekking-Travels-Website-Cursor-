import React, { useMemo, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup, Carousel, Modal } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClock, FaEye } from 'react-icons/fa';
import './PackagesGrid.css';

const buildPackages = () => {
  const basePackages = [
    { title: 'Everest Base Camp', location: 'Nepal', days: 14 },
    { title: 'Inca Trail', location: 'Peru', days: 7 },
    { title: 'Swiss Alps Traverse', location: 'Switzerland', days: 10 },
    { title: 'Patagonia Explorer', location: 'Argentina', days: 12 },
    { title: 'Torres del Paine', location: 'Chile', days: 9 },
    { title: 'Mont Blanc Circuit', location: 'France / Italy / Switzerland', days: 12 },
    { title: 'Kilimanjaro Summit', location: 'Tanzania', days: 8 },
    { title: 'Bhutan Cultural Trek', location: 'Bhutan', days: 14 },
    { title: 'Annapurna Circuit', location: 'Nepal', days: 18 },
    { title: 'Alaska Denali Trek', location: 'USA', days: 16 }
  ];

  const inclusions = [
    'Professional guide',
    'Accommodation during trek',
    'Meals as specified',
    'Permits and park fees',
    'Group equipment'
  ];

  const exclusions = [
    'International flights',
    'Travel insurance',
    'Personal expenses',
    'Tips and gratuities'
  ];

  const imagePool = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1500534314209-3a0d3fb9c2cf?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1500534314209-9f2c4f05fbf6?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80'
  ];

  const packages = Array.from({ length: 36 }).map((_, index) => {
    const base = basePackages[index % basePackages.length];
    const id = index + 1;
    const price = `$${(799 + (index % 10) * 100).toLocaleString()}`;
    const images = Array.from({ length: 5 }).map((__, k) => imagePool[(index + k) % imagePool.length]);
    return {
      id,
      title: `${base.title} ${Math.floor(index / basePackages.length) + 1}`,
      location: base.location,
      days: base.days,
      price,
      images,
      inclusions,
      exclusions,
      itinerary: [
        'Arrival and orientation.',
        'Trail start and gradual ascent.',
        'Scenic ridge hike with panoramic views.',
        'Summit day / highlight of the route.',
        'Descent and departure.'
      ]
    };
  });

  return packages;
};

const PackagesGrid = () => {
  const packages = useMemo(buildPackages, []);
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleViewPackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowPackageModal(true);
  };

  const handleClosePackageModal = () => {
    setShowPackageModal(false);
    setSelectedPackage(null);
  };

  return (
    <section className="packages-grid-section" id="packages">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center mb-4">
            <h2 className="section-title">All Trekking Packages</h2>
            <p className="section-subtitle">Explore 30+ curated adventures around the world</p>
          </Col>
        </Row>

        <Row>
          {packages.map((pkg) => (
            <Col key={pkg.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="grid-package-card h-100">
                <div className="grid-image-container">
                  <Carousel interval={4000} indicators={false} controls={true} className="grid-carousel">
                    {pkg.images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="grid-carousel-image" style={{ backgroundImage: `url(${image})` }} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="grid-card-header">
                    <h5 className="grid-card-title">{pkg.title}</h5>
                    {/* dropdown removed as requested */}
                  </div>

                  <div className="grid-meta">
                    <span className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" /> {pkg.location}
                    </span>
                    <span className="meta-item">
                      <FaClock className="meta-icon" /> {pkg.days} Days
                    </span>
                    <Badge bg="warning" className="price-badge">{pkg.price}</Badge>
                  </div>

                  <div className="grid-actions mt-auto">
                    <Button 
                      variant="outline-primary" 
                      size="md" 
                      className="view-btn"
                      onClick={() => handleViewPackage(pkg)}
                    >
                      <FaEye /> View Package
                    </Button>
                    <Button 
                      variant="primary" 
                      size="md" 
                      className="book-now-btn"
                    >
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Package Details Modal */}
      <Modal show={showPackageModal} onHide={handleClosePackageModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPackage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPackage && (
            <>
              <div className="modal-package-header mb-4">
                <Row>
                  <Col md={8}>
                    <h4 className="modal-package-title">{selectedPackage.title}</h4>
                    <div className="modal-package-meta">
                      <span className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" /> {selectedPackage.location}
                      </span>
                      <span className="meta-item">
                        <FaClock className="meta-icon" /> {selectedPackage.days} Days
                      </span>
                    </div>
                  </Col>
                  <Col md={4} className="text-end">
                    <Badge bg="warning" className="modal-price-badge">{selectedPackage.price}</Badge>
                  </Col>
                </Row>
              </div>

              <div className="modal-package-images mb-4">
                <Carousel interval={4000} indicators={true} controls={true} className="modal-carousel">
                  {selectedPackage.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <div 
                        className="modal-carousel-image" 
                        style={{ backgroundImage: `url(${image})` }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <Row>
                <Col md={6} className="mb-3">
                  <h6>Included</h6>
                  <ListGroup variant="flush" className="modal-list">
                    {selectedPackage.inclusions.map((item, idx) => (
                      <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Not Included</h6>
                  <ListGroup variant="flush" className="modal-list">
                    {selectedPackage.exclusions.map((item, idx) => (
                      <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
              
              <div className="itinerary">
                <h6>Sample Itinerary</h6>
                <ol>
                  {selectedPackage.itinerary.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="book-now-btn"
            onClick={handleClosePackageModal}
          >
            Book This Package
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default PackagesGrid;


