// Needed imports
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
import './styles/styles.css';

function App() {
  // State management for tours data, loading status, and errors
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('all');

  // Fetch tours data from API on component mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Handler for removing a tour
  const handleRemoveTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  // Handler for refreshing tours data
  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    setSelectedDestination('all');
    const fetchTours = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  };

  // Filter tours based on selected destination
  const filteredTours = selectedDestination === 'all' 
    ? tours 
    : tours.filter(tour => tour.name === selectedDestination);

  return (
    <div className="app">
      <h1>Tour Explorer</h1>
      <DestinationSelector 
        tours={tours} 
        selectedDestination={selectedDestination}
        onSelectDestination={setSelectedDestination}
      />
      <Gallery 
        tours={filteredTours} 
        loading={loading} 
        error={error} 
        onRemoveTour={handleRemoveTour}
        onRefresh={handleRefresh}
      />
    </div>
  );
}

export default App;