import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function DashboardPage() {
const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  function handleSearch(location) {
  console.log(`Search for events near ${location}`);
  fetch(`/api/events?location=${location}`)
    .then(response => response.json())
    .then(data => {
      setEvents(data.events);
      navigate('/events');
    });
}

  return (
    <div>
      <h1>Dashboard Page</h1>
      <SearchBar onSearch={handleSearch} />
      {/* add carousel and any other components here */}
    </div>
  );
}