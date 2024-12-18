import React from "react";
import { useState, useEffect } from "react";

const Visitorcount = () => {
  const [count, setCount] = useState(0);

  // Function to increase count when a user visits
  const fetchAPI = async () => {
    try {
      const response = await fetch("/api/HttpTrigger", {
        method: "POST",
      });
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Error incrementing count:", error);
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
