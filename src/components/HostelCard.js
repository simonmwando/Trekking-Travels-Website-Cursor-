import React from 'react';
import './HostelCard.css';

const HostelCard = ({ name, rating, price, image, altText }) => {
  // Generate stars based on rating
  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<div key={i} className="star filled"></div>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<div key={i} className="star half-filled"></div>);
      } else {
        stars.push(<div key={i} className="star"></div>);
      }
    }
    return stars;
  };

  return (
    <div className="hostel-card">
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
