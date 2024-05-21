import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/data', { data: inputData });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={handleInputChange} />
        <button type="submit">Send Data</button>
      </form>
    </div>
  );
};

export default Test;
