import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge, ListGroup, Modal } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers, FaCheck, FaTimes, FaEye } from 'react-icons/fa';
import './PopularPackages.css';

const PopularPackages = () => {
  const [activeIndexes, setActiveIndexes] = useState({});
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

  const popularPackages = [
    {
      id: 1,
      title: "Annapurna Circuit Trek",
      location: "Nepal",
      duration: "18 Days",
      groupSize: "Max 15",
      difficulty: "Moderate",
      price: "$1,199",
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Experience one of the world's most spectacular treks around the Annapurna massif.",
      inclusions: [
        "Professional guide and porters",
        "All meals during trek",
        "Accommodation in teahouses",
        "Permits and TIMS card",
        "Transportation to/from trailhead"
      ],
      exclusions: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Tips for guides/porters"
      ]
    },
    {
      id: 2,
      title: "Kilimanjaro Summit",
      location: "Tanzania",
      duration: "8 Days",
      groupSize: "Max 12",
      difficulty: "Challenging",
      price: "$2,499",
      rating: 4.8,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Climb Africa's highest peak and witness breathtaking views from the roof of Africa.",
      inclusions: [
        "Experienced mountain guides",
        "All camping equipment",
        "Three meals daily",
        "Park fees and permits",
        "Safety equipment"
      ],
      exclusions: [
        "International flights",
        "Personal gear",
        "Travel insurance",
        "Tips and gratuities"
      ]
    },
    {
      id: 3,
      title: "Torres del Paine",
      location: "Chile",
      duration: "10 Days",
      groupSize: "Max 10",
      difficulty: "Moderate",
      price: "$1,899",
      rating: 4.7,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Explore the stunning landscapes of Patagonia's most famous national park.",
      inclusions: [
        "Professional bilingual guide",
        "All accommodation",
        "Meals as specified",
        "Park entrance fees",
        "Transportation within park"
      ],
      exclusions: [
        "International flights",
        "Personal equipment",
        "Travel insurance",
        "Alcoholic beverages"
      ]
    },
    {
      id: 4,
      title: "Mont Blanc Circuit",
      location: "France/Italy/Switzerland",
      duration: "12 Days",
      groupSize: "Max 14",
      difficulty: "Moderate",
      price: "$2,199",
      rating: 4.6,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Circumnavigate Western Europe's highest peak through three countries.",
      inclusions: [
        "Experienced mountain guide",
        "Mountain refuges/hotels",
        "Half-board accommodation",
        "Luggage transfers",
        "Route planning support"
      ],
      exclusions: [
        "International flights",
        "Personal equipment",
        "Travel insurance",
        "Lunches and drinks"
      ]
    },
    {
      id: 5,
      title: "Bhutan Cultural Trek",
      location: "Bhutan",
      duration: "14 Days",
      groupSize: "Max 12",
      difficulty: "Easy",
      price: "$3,299",
      rating: 4.9,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Combine trekking with cultural immersion in the mystical kingdom of Bhutan.",
      inclusions: [
        "Bhutan visa and permits",
        "Professional guide",
        "All accommodation",
        "Three meals daily",
        "Cultural activities"
      ],
      exclusions: [
        "International flights",
        "Personal expenses",
        "Travel insurance",
        "Optional activities"
      ]
    },
    {
      id: 6,
      title: "Alaska Denali Trek",
      location: "USA",
      duration: "16 Days",
      groupSize: "Max 8",
      difficulty: "Challenging",
      price: "$4,199",
      rating: 4.5,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      ],
      description: "Explore the wild beauty of North America's highest peak and surrounding wilderness.",
      inclusions: [
        "Expert wilderness guides",
        "All camping equipment",
        "Meals and snacks",
        "Park permits",
        "Safety and emergency gear"
      ],
      exclusions: [
        "International flights",
        "Personal gear",
        "Travel insurance",
        "Pre/post trip accommodation"
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'success';
      case 'Moderate': return 'warning';
      case 'Challenging': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <section className="popular-packages-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Popular Trekking Packages</h2>
            <p className="section-subtitle">
              Choose from our carefully curated selection of world-class trekking adventures
            </p>
          </Col>
        </Row>
        
        <Row>
          {popularPackages.map((pkg) => (
            <Col lg={4} md={6} className="mb-4" key={pkg.id}>
              <Card className="package-card h-100">
                <div className="card-image-container">
                  <Carousel 
                    activeIndex={activeIndexes[pkg.id] || 0}
                    onSelect={(index) => setActiveIndexes({...activeIndexes, [pkg.id]: index})}
                    interval={null}
                    indicators={true}
                    controls={true}
                    className="package-carousel"
                  >
                    {pkg.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <div 
                          className="carousel-image"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  
                  <div className="card-overlay">
                    <Badge bg={getDifficultyColor(pkg.difficulty)} className="difficulty-badge">
                      {pkg.difficulty}
                    </Badge>
                    <div className="price-badge">
                      <span className="price">{pkg.price}</span>
                    </div>
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <div className="package-header">
                    <h5 className="package-title">{pkg.title}</h5>
                    <div className="header-actions">
                      <div className="package-rating">
                        <FaStar className="star-icon" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="package-meta">
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="meta-item">
                      <FaClock className="meta-icon" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaUsers className="meta-icon" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <p className="package-description">{pkg.description}</p>
                  
                  <div className="package-details mt-auto">
                    <div className="inclusions-exclusions">
                      <div className="inclusions">
                        <h6>Included:</h6>
                        <ListGroup variant="flush">
                          {pkg.inclusions.slice(0, 3).map((item, index) => (
                            <ListGroup.Item key={index} className="inclusion-item">
                              <FaCheck className="check-icon" />
                              {item}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                      
                      <div className="exclusions">
                        <h6>Not Included:</h6>
                        <ListGroup variant="flush">
                          {pkg.exclusions.slice(0, 2).map((item, index) => (
                            <ListGroup.Item key={index} className="exclusion-item">
                              <FaTimes className="times-icon" />
                              {item}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                    </div>
                    
                    <div className="package-actions">
                      <Button 
                        variant="outline-primary" 
                        size="md" 
                        className="view-package-btn me-2"
                        onClick={() => handleViewPackage(pkg)}
                      >
                        <FaEye /> View Package
                      </Button>
                      <Button 
                        variant="primary" 
                        size="md" 
                        className="book-now-btn"
                      >
                        Book This Package
                      </Button>
                    </div>
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
                        <FaClock className="meta-icon" /> {selectedPackage.duration}
                      </span>
                      <span className="meta-item">
                        <FaUsers className="meta-icon" /> {selectedPackage.groupSize}
                      </span>
                    </div>
                  </Col>
                  <Col md={4} className="text-end">
                    <Badge bg="warning" className="modal-price-badge">{selectedPackage.price}</Badge>
                    <Badge bg={getDifficultyColor(selectedPackage.difficulty)} className="modal-difficulty-badge ms-2">
                      {selectedPackage.difficulty}
                    </Badge>
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

              <p className="modal-package-description mb-4">{selectedPackage.description}</p>

              <Row>
                <Col md={6} className="mb-3">
                  <h6>Included</h6>
                  <ListGroup variant="flush" className="modal-list">
                    {selectedPackage.inclusions.map((item, idx) => (
                      <ListGroup.Item key={idx} className="inclusion-item">
                        <FaCheck className="check-icon" />
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Not Included</h6>
                  <ListGroup variant="flush" className="modal-list">
                    {selectedPackage.exclusions.map((item, idx) => (
                      <ListGroup.Item key={idx} className="exclusion-item">
                        <FaTimes className="times-icon" />
                        {item}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
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

export default PopularPackages; 