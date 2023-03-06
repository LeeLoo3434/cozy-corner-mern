import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/events?location=${location}`);
      const data = await response.json();
      onSearch(data.events);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter your location" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
