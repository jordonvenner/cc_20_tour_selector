
/**
 * Dropdown component for filtering tours by destination
 * @param {Object} props - Component props
 * @param {Array} props.tours - Array of all available tours
 * @param {string} props.selectedDestination - Currently selected filter value
 * @param {Function} props.onSelectDestination - Callback for selection changes
 */
function DestinationSelector({ tours, selectedDestination, onSelectDestination }) {
  // Get unique destinations from tours data, adding 'all' option
  const uniqueDestinations = ['all', ...new Set(tours.map(tour => tour.name))];

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select a Destination:</label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={(e) => onSelectDestination(e.target.value)}
      >
        {uniqueDestinations.map(destination => (
          <option key={destination} value={destination}>
            {destination === 'all' ? 'All Destinations' : destination}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;

