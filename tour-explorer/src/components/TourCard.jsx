// Needed imports
import { useState } from 'react';

/**
 * Displays individual tour information with expandable details
 * @param {Object} props - Component props
 * @param {Object} props.tour - Tour data object
 * @param {Function} props.onRemoveTour - Callback for removing this tour
 */
function TourCard({ tour, onRemoveTour }) {
    // State to toggle between truncated and full description
    const [readMore, setReadMore] = useState(false);
  
    return (
      <div className="tour-card">
        {/* Tour image */}
        <img src={tour.image} alt={tour.name} />
        
        {/* Tour information section */}
        <div className="tour-info">
          {/* Header with name and price */}
          <div className="tour-header">
            <h3>{tour.name}</h3>
            <span className="price">${tour.price}</span>
          </div>
          
          {/* Description with read more/less toggle */}
          <p>
            {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Show Less' : 'Read More'}
            </button>
          </p>
          
          {/* Remove tour button */}
          <button 
            className="not-interested"
            onClick={() => onRemoveTour(tour.id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    );
}
  
export default TourCard;

