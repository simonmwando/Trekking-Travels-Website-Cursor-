import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Modal } from 'react-bootstrap';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowLeft, FaWifi, FaParking, FaUtensils, FaShower, FaBed, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './HostelDetail.css';

const HostelDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hostel data - in a real app, this would come from an API or database
  const hostels = {
                     '11th-avenue-hostel': {
         name: '11th Avenue Hostel',
         rating: 4.8,
         price: 96,
                   image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=30',
         altText: 'Modern hostel lobby',
                   gallery: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=30',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=30',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=30',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=30',
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=30'
          ],
        description: 'A modern, vibrant hostel located in the heart of the city. Perfect for travelers seeking comfort and community.',
        location: 'Downtown District, City Center',
        amenities: ['Free WiFi', 'Parking', 'Kitchen', 'Common Room', 'Laundry', '24/7 Reception'],
        features: [
          { icon: <FaWifi />, text: 'Free WiFi' },
          { icon: <FaParking />, text: 'Free Parking' },
          { icon: <FaUtensils />, text: 'Shared Kitchen' },
          { icon: <FaShower />, text: 'Private Showers' },
          { icon: <FaBed />, text: 'Comfortable Beds' }
        ],
               contact: {
           phone: '+260 979 484 920',
           email: 'reservations@trekkingtravelsandtours.com'
         },
        policies: [
          'Check-in: 2:00 PM',
          'Check-out: 11:00 AM',
          'No smoking',
          'Pets allowed with prior notice'
        ]
      },
         'downtown-backpackers': {
       name: 'Downtown Backpackers',
       rating: 4.6,
       price: 78,
               image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=30',
        altText: 'Cozy hostel common area',
        gallery: [
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=30'
        ],
      description: 'A cozy, budget-friendly hostel perfect for backpackers and budget travelers. Great location near major attractions.',
      location: 'Historic District, Near Central Station',
      amenities: ['Free WiFi', 'Luggage Storage', 'Tour Desk', 'Common Room', 'Bike Rental'],
      features: [
        { icon: <FaWifi />, text: 'Free WiFi' },
        { icon: <FaUtensils />, text: 'Breakfast Included' },
        { icon: <FaShower />, text: 'Shared Bathrooms' },
        { icon: <FaBed />, text: 'Dormitory Style' }
      ],
                           contact: {
          phone: '+260 979 484 920',
          email: 'reservations@trekkingtravelsandtours.com'
        },
      policies: [
        'Check-in: 3:00 PM',
        'Check-out: 10:00 AM',
        'Cash only',
        'Age restriction: 18+'
      ]
    },
         'mountain-view-lodge': {
       name: 'Mountain View Lodge',
       rating: 4.9,
       price: 112,
               image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=30',
        altText: 'Scenic mountain hostel',
        gallery: [
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=30'
        ],
      description: 'Breathtaking mountain views and outdoor adventure activities. Perfect for nature lovers and adventure seekers.',
      location: 'Mountain Range, National Park Area',
      amenities: ['Free WiFi', 'Mountain Views', 'Hiking Trails', 'Campfire Area', 'Equipment Rental'],
      features: [
        { icon: <FaWifi />, text: 'Free WiFi' },
        { icon: <FaParking />, text: 'Free Parking' },
        { icon: <FaUtensils />, text: 'Restaurant On-site' },
        { icon: <FaShower />, text: 'Hot Showers' },
        { icon: <FaBed />, text: 'Private Rooms Available' }
      ],
                           contact: {
          phone: '+260 979 484 920',
          email: 'reservations@trekkingtravelsandtours.com'
        },
      policies: [
        'Check-in: 4:00 PM',
        'Check-out: 11:00 AM',
        'Weather dependent access',
        'Advance booking recommended'
      ]
    },
         'beachside-bunkhouse': {
       name: 'Beachside Bunkhouse',
       rating: 4.7,
       price: 89,
               image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=30',
        altText: 'Beach hostel with ocean view',
        gallery: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=30',
          'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=30'
        ],
      description: 'Steps away from the beach with stunning ocean views. Perfect for beach lovers and water sports enthusiasts.',
      location: 'Beachfront, Coastal District',
      amenities: ['Beach Access', 'Ocean Views', 'Water Sports', 'Beach Equipment', 'Sunset Deck'],
      features: [
        { icon: <FaWifi />, text: 'Free WiFi' },
        { icon: <FaParking />, text: 'Beach Parking' },
        { icon: <FaUtensils />, text: 'Beach Bar' },
        { icon: <FaShower />, text: 'Outdoor Showers' },
        { icon: <FaBed />, text: 'Beachfront Rooms' }
      ],
                           contact: {
          phone: '+260 979 484 920',
          email: 'reservations@trekkingtravelsandtours.com'
        },
      policies: [
        'Check-in: 2:00 PM',
        'Check-out: 11:00 AM',
        'Beach towels provided',
        'Water sports equipment available'
      ]
    }
  };

  const hostel = hostels[slug];

  if (!hostel) {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2>Hostel Not Found</h2>
            <p>The hostel you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')} variant="primary">
              <FaArrowLeft className="me-2" />
              Back to Home
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  const generateStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half-filled" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === hostel.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? hostel.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hostel-detail-page">
      <Container>
        {/* Back Button */}
        <Row className="mt-4">
          <Col>
            <Button 
              onClick={() => navigate('/')} 
              variant="outline-secondary" 
              className="back-button"
            >
              <FaArrowLeft className="me-2" />
              Back to Home
            </Button>
          </Col>
        </Row>

                 {/* Hostel Header */}
                  <Row className="mt-4 hostel-header-row">
           <Col>
            <h1 className="hostel-name">{hostel.name}</h1>
            <div className="hostel-rating">
              <div className="stars">
                {generateStars(hostel.rating)}
              </div>
              <span className="rating-number">{hostel.rating}</span>
              <Badge bg="success" className="ms-2">Excellent</Badge>
            </div>
            <p className="hostel-location">
              <FaMapMarkerAlt className="me-2" />
              {hostel.location}
            </p>
          </Col>
          
        </Row>

                 {/* Main Image Gallery */}
         <Row className="mt-4">
           <Col>
             <div className="hostel-gallery">
               <div className="gallery-layout">
                 <div className="primary-image-container">
                   <img 
                     src={hostel.gallery[0]} 
                     alt={hostel.altText} 
                     className="hostel-primary-image"
                     onClick={() => openGallery(0)}
                   />
                   <div className="image-overlay">
                     <span className="gallery-indicator">Click to view gallery ({hostel.gallery.length} photos)</span>
                   </div>
                 </div>
                 <div className="secondary-images-container">
                   <div className="secondary-images-grid">
                     {hostel.gallery.slice(1, 5).map((image, index) => (
                       <div 
                         key={index + 1} 
                         className="secondary-image-item"
                         onClick={() => openGallery(index + 1)}
                       >
                         <img 
                           src={image} 
                           alt={`${hostel.altText} ${index + 2}`} 
                           className="secondary-image"
                         />
                       </div>
                     ))}
                   </div>
                   <div className="view-more-overlay" onClick={() => openGallery(0)}>
                     <span className="view-more-text">View More</span>
                     <span className="photo-count">+{hostel.gallery.length - 1} photos</span>
                   </div>
                 </div>
               </div>
             </div>
           </Col>
         </Row>

        {/* Description and Features */}
        <Row className="mt-5">
          <Col lg={8}>
            <h3>About this place</h3>
            <p className="hostel-description">{hostel.description}</p>
            
            <h4 className="mt-4">What this place offers</h4>
            <div className="features-grid">
              {hostel.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

                         <Row className="mt-4">
               <Col md={6}>
                 <h4>Inclusions</h4>
                 <ul className="policies-list">
                   {hostel.policies.map((policy, index) => (
                     <li key={index}>{policy}</li>
                   ))}
                 </ul>
               </Col>
               <Col md={6}>
                 <h4>Exclusions</h4>
                 <ul className="policies-list">
                   <li>Airport transfers</li>
                   <li>Meals not specified</li>
                   <li>Personal expenses</li>
                   <li>Travel insurance</li>
                 </ul>
               </Col>
             </Row>
             
                           <h4 className="mt-4">Please note</h4>
              <ul className="policies-list">
                <li>Advance booking is recommended</li>
                <li>Check-in time is flexible based on availability</li>
                <li>Local taxes may apply</li>
                <li>Contact us for special requests</li>
              </ul>
              
              {/* Similar Hostels Section */}
              <h4 className="mt-5">See similar</h4>
              <Row className="mt-3">
                {Object.entries(hostels)
                  .filter(([key]) => key !== slug) // Exclude current hostel
                  .slice(0, 4) // Show only 4 similar hostels
                  .map(([key, similarHostel]) => (
                    <Col key={key} md={6} lg={3} className="mb-3">
                      <div className="similar-hostel-card" onClick={() => navigate(`/hostel/${key}`)}>
                        <div className="similar-hostel-image">
                          <img 
                            src={similarHostel.image} 
                            alt={similarHostel.altText}
                            className="similar-image"
                          />
                        </div>
                        <div className="similar-hostel-info">
                          <h6 className="similar-hostel-name">{similarHostel.name}</h6>
                          <div className="similar-hostel-rating">
                            <div className="similar-stars">
                              {generateStars(similarHostel.rating)}
                            </div>
                            <span className="similar-rating-number">{similarHostel.rating}</span>
                          </div>
                          <p className="similar-hostel-location">
                            <FaMapMarkerAlt className="me-1" />
                            {similarHostel.location}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
          </Col>

          <Col lg={4}>
                         <div className="booking-card">
               <div className="price-display mb-3">
                 <span className="price-amount">${hostel.price}</span>
                 <span className="price-unit">per night</span>
               </div>
               <h4>Book your stay</h4>
                                              <Button 
                   variant="primary" 
                   size="lg" 
                   className="w-100 mb-3"
                   onClick={() => window.open('https://wa.me/260979484920', '_blank')}
                 >
                   Book Via WhatsApp
                 </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className="w-100 mb-3"
                  onClick={() => window.open('mailto:reservations@trekkingtravelsandtours.com?subject=Booking Inquiry for ' + encodeURIComponent(hostel.name) + '&body=Hello, I would like to make a booking for ' + encodeURIComponent(hostel.name) + '. Please provide more information about availability and rates.', '_blank')}
                >
                  Book Via Email
                </Button>
                                                                                                                            <Button 
                    variant="success" 
                    size="lg" 
                    className="w-100 mb-3"
                    onClick={() => window.open('tel:+260764121396', '_blank')}
                  >
                    Call
                  </Button>
               
               {/* Customer Reviews Section */}
               <div className="customer-reviews-section">
                 <h5 className="reviews-title">What guests say</h5>
                 <div className="reviews-carousel">
                   <div className="review-item">
                     <div className="review-stars">
                       {generateStars(4.9)}
                     </div>
                     <p className="review-text">
                       "Absolutely amazing experience! The views are breathtaking and the staff went above and beyond to make our stay memorable."
                     </p>
                     <div className="review-author">
                       <span className="author-name">Sarah M.</span>
                       <span className="review-date">2 weeks ago</span>
                     </div>
                   </div>
                 </div>
                 <div className="reviews-indicators">
                   <button className="indicator active"></button>
                   <button className="indicator"></button>
                   <button className="indicator"></button>
                 </div>
               </div>
             </div>
                     </Col>
         </Row>
       </Container>

       {/* Gallery Modal */}
       <Modal 
         show={showGallery} 
         onHide={closeGallery} 
         size="xl" 
         centered
         className="gallery-modal"
       >
         <Modal.Header closeButton>
           <Modal.Title>{hostel.name} - Photo Gallery</Modal.Title>
         </Modal.Header>
         <Modal.Body className="p-0">
           <div className="gallery-modal-content">
             <button 
               className="gallery-nav-btn gallery-nav-prev" 
               onClick={prevImage}
               aria-label="Previous image"
             >
               <FaChevronLeft />
             </button>
             
             <div className="gallery-main-image">
               <img 
                 src={hostel.gallery[currentImageIndex]} 
                 alt={`${hostel.altText} ${currentImageIndex + 1}`}
               />
             </div>
             
             <button 
               className="gallery-nav-btn gallery-nav-next" 
               onClick={nextImage}
               aria-label="Next image"
             >
               <FaChevronRight />
             </button>
           </div>
           
           <div className="gallery-thumbnails">
             {hostel.gallery.map((image, index) => (
               <div 
                 key={index}
                 className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                 onClick={() => setCurrentImageIndex(index)}
               >
                 <img 
                   src={image} 
                   alt={`${hostel.altText} ${index + 1}`}
                 />
               </div>
             ))}
           </div>
           
           <div className="gallery-counter">
             {currentImageIndex + 1} of {hostel.gallery.length}
           </div>
         </Modal.Body>
       </Modal>
     </div>
   );
 };

export default HostelDetail;
