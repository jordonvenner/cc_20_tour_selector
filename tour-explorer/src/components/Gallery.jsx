// Needed imports
import TourCard from './TourCard';

/**
 * Main display component that handles all tour viewing states
 * @param {Object} props - Component props
 * @param {Array} props.tours - Array of tour objects to display
 * @param {boolean} props.loading - Loading state flag
 * @param {string|null} props.error - Error message if any
 * @param {Function} props.onRemoveTour - Callback for tour removal
 * @param {Function} props.onRefresh - Callback for data refresh
 */
function Gallery({ tours, loading, error, onRemoveTour, onRefresh }) {
  // Loading state display
  if (loading) {
    return <div className="loading">Loading tours...</div>;
  }

  // Error state display
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  // Empty state display
  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <p>No tours left. Refresh to reload.</p>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  // Main tours display
  return (
    <div className="gallery">
      {tours.map(tour => (
        <TourCard 
          key={tour.id} 
          tour={tour} 
          onRemoveTour={onRemoveTour}
        />
      ))}
    </div>
  );
}

export default Gallery;

