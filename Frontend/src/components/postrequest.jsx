import React, { useState } from 'react';

const PostRequestComponent = () => {
  const [response, setResponse] = useState(null);

  const handlePostRequest = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8080/api/testazure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'john' }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  return (
    <div style={{backgroundColor: 'white'}}>
      <button onClick={handlePostRequest}>Send POST Request</button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
    </div>
  );
};

export default PostRequestComponent;
