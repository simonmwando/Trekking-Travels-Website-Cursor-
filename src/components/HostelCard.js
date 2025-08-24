import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './HostelCard.css';

const HostelCard = ({ name, rating, price, image, altText, slug }) => {
  const navigate = useNavigate();

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

  const handleCardClick = () => {
    if (slug) {
      navigate(`/hostel/${slug}`);
    }
  };

  return (
    <div 
      className={`hostel-card ${slug ? 'clickable' : ''}`}
      onClick={handleCardClick}
      style={{ cursor: slug ? 'pointer' : 'default' }}
    >
      <div className="hostel-image">
        <img 
          src={image} 
          alt={altText}
        />
      </div>
      
      <div className="hostel-content">
        <h3 className="hostel-name">{name}</h3>
        
        <div className="hostel-rating">
          <span className="rating-text">{rating}</span>
          <div className="rating-stars">
            {generateStars(rating)}
          </div>
        </div>
        
        <div className="hostel-price">
          from ${price}
        </div>
      </div>
    </div>
  );
};

export default HostelCard;
