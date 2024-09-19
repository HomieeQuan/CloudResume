import React from 'react'
import { useState, useEffect } from 'react'


const Visitorcount = () => {
  
  const [count, setCount] = useState(0)
  
  const fetchApi = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/visitorcount');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.visitorcount);
      setCount(data.visitorcount);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className='px-3 py-2 text-sm text-white bg-gray-900 bg-opacity-80 rounded-md hover:bg-opacity-100 transition-all duration-300'>Number of Visitors {count}</div>
  )
}

export default Visitorcount