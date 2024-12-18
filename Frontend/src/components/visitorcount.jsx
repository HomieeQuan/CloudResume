import React from "react";
import { useState, useEffect } from "react";

const Visitorcount = () => {
  const [count, setCount] = useState(0);

  // Function to increase count when a user visits
  const fetchAPI = async () => {
    try {
      console.log('Making request to:', '/api/HttpTrigger'); // Add this log
      const response = await fetch('/api/HttpTrigger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response status:', response.status); // Add this log
      const data = await response.json();
      console.log('Response data:', data); // Add this log
      setCount(data.count);
    } catch (error) {
      console.error('Detailed error:', error); // More detailed error logging
    }
  };

  // Increment count when component mounts (when someone visits)
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="px-3 py-2 text-sm text-white bg-gray-900 bg-opacity-80 rounded-md hover:bg-opacity-100 transition-all duration-300">
      Number of Visitors {count}
    </div>
  );
};

export default Visitorcount;
