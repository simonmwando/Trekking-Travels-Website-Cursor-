import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlane, FaUsers, FaMicrophone, FaGift, FaPassport, FaShieldAlt, FaGlobe, FaSuitcase, FaCar, FaGraduationCap, FaBed, FaMapMarkedAlt, FaCamera, FaUtensils } from 'react-icons/fa';
import './ServicesPage.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'airline-reservation',
      icon: <FaPlane />,
      title: 'Airline Reservation & Ticketing',
      description: 'Immediate reservations and ticketing for over 130 global airlines.',
      details: 'We provide comprehensive airline booking services including domestic and international flights, with access to major carriers and budget airlines. Our team ensures the best rates and convenient schedules for your travel needs.',
      features: ['130+ global airlines', 'Best price guarantee', '24/7 booking support', 'Flexible payment options']
    },
    {
      id: 'corporate-events',
      icon: <FaUsers />,
      title: 'Meetings, Incentives & Corporate Events',
      description: 'Comprehensive management of M.I.C.E. events and corporate functions.',
      details: 'Professional event planning and management for corporate meetings, incentive trips, and special events. We handle everything from venue selection to logistics coordination.',
      features: ['Event planning', 'Venue selection', 'Logistics coordination', 'On-site management']
    },
    {
      id: 'conferences',
      icon: <FaMicrophone />,
      title: 'Conferences',
      description: 'Assistance in executing corporate events, including company-wide conferences and product launches.',
      details: 'Full-service conference management including venue booking, technical setup, catering, and attendee management for successful corporate events.',
      features: ['Conference planning', 'Technical setup', 'Catering services', 'Attendee management']
    },
    {
      id: 'incentive-travel',
      icon: <FaGift />,
      title: 'Incentive Travel',
      description: 'Strategic implementation of incentive programs to foster loyalty and motivation.',
      details: 'Custom incentive travel programs designed to motivate employees and reward top performers with unforgettable travel experiences.',
      features: ['Custom programs', 'Performance rewards', 'Luxury experiences', 'Team building']
    },
    {
      id: 'visas',
      icon: <FaPassport />,
      title: 'Visas',
      description: 'Visa processing for a selection of countries in Africa and globally.',
      details: 'Expert visa application assistance for various destinations, ensuring smooth processing and approval for your international travel.',
      features: ['Multiple countries', 'Expert assistance', 'Fast processing', 'Document guidance']
    },
    {
      id: 'travel-insurance',
      icon: <FaShieldAlt />,
      title: 'Travel Insurance',
      description: 'Mandatory travel insurance included in all travel, underwritten by a reputable provider.',
      details: 'Comprehensive travel insurance coverage including medical, trip cancellation, and baggage protection for worry-free travel.',
      features: ['Medical coverage', 'Trip cancellation', 'Baggage protection', '24/7 assistance']
    },
    {
      id: 'group-travel',
      icon: <FaGlobe />,
      title: 'Group Travel',
      description: '24/7 global travel support with local management for continuous assistance.',
      details: 'Specialized group travel services with dedicated support, customized itineraries, and local expertise for memorable group experiences.',
      features: ['Group coordination', 'Custom itineraries', 'Local expertise', '24/7 support']
    },
    {
      id: 'holiday-packages',
      icon: <FaSuitcase />,
      title: 'Holiday Packages',
      description: 'A diverse selection from cost-effective to bespoke itineraries.',
      details: 'Curated holiday packages ranging from budget-friendly options to luxury experiences, tailored to your preferences and budget.',
      features: ['Budget options', 'Luxury packages', 'Custom itineraries', 'All-inclusive deals']
    },
    {
      id: 'car-rental',
      icon: <FaCar />,
      title: 'Car Rental Services',
      description: 'A diverse fleet including sedans, 4x4s, standard buses, and luxury coaches.',
      details: 'Comprehensive vehicle rental services with a wide selection of vehicles for any travel need, from city exploration to adventure trips.',
      features: ['Sedans & SUVs', '4x4 vehicles', 'Buses & coaches', 'Luxury options']
    },
    {
      id: 'student-travel',
      icon: <FaGraduationCap />,
      title: 'Student Travel',
      description: 'Competitive airfares, exclusive packages, extra baggage allowances, and student travel insurance.',
      details: 'Specialized travel services for students including discounted rates, flexible booking options, and student-specific benefits.',
      features: ['Student discounts', 'Extra baggage', 'Flexible booking', 'Student insurance']
    },
    {
      id: 'accommodation',
      icon: <FaBed />,
      title: 'Accommodation Booking',
      description: 'Wide range of accommodation options from budget hostels to luxury hotels.',
      details: 'Comprehensive accommodation booking services including hostels, hotels, resorts, and unique stays worldwide.',
      features: ['Hostels & hotels', 'Luxury resorts', 'Unique stays', 'Best rates']
    },
    {
      id: 'adventure-tours',
      icon: <FaMapMarkedAlt />,
      title: 'Adventure Tours',
      description: 'Guided adventure tours and trekking experiences in Zambia and beyond.',
      details: 'Expert-led adventure tours including hiking, wildlife safaris, cultural experiences, and outdoor activities.',
      features: ['Guided tours', 'Wildlife safaris', 'Cultural experiences', 'Outdoor activities']
    },
    {
      id: 'photography-tours',
      icon: <FaCamera />,
      title: 'Photography Tours',
      description: 'Specialized photography tours for capturing stunning landscapes and wildlife.',
      details: 'Photography-focused tours led by professional photographers, designed to capture the best moments and locations.',
      features: ['Professional guides', 'Prime locations', 'Equipment advice', 'Photo workshops']
    },
    {
      id: 'culinary-tours',
      icon: <FaUtensils />,
      title: 'Culinary Tours',
      description: 'Food and culture tours exploring local cuisine and traditions.',
      details: 'Culinary adventures featuring local food experiences, cooking classes, and cultural immersion through food.',
      features: ['Local cuisine', 'Cooking classes', 'Food markets', 'Cultural immersion']
    }
  ];

  const handleServiceClick = (serviceId) => {
    // Navigate to service detail page or open modal
    console.log('Service clicked:', serviceId);
    // You can implement navigation to individual service pages here
  };

  return (
    <section className="why-choose-us-section">
      <Container>
        

        {/* Services Header */}
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive travel and trekking solutions for all your adventure needs
            </p>
          </Col>
        </Row>
        
        {/* Services Grid */}
        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={3} md={6} className="mb-4">
              <Card className="reason-card h-100">
                <Card.Body className="text-center">
                  <div className="icon-container">
                    {service.icon}
                  </div>
                  <h5 className="reason-title">{service.title}</h5>
                  <p className="reason-description">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesPage;
