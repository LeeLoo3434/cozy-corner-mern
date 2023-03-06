import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/events`)
      .then(response => response.json())
      .then(data => setEvents(data.events));
  }, []);

  return (
    <div>
      <h1>Events Page</h1>
      {events.length === 0 && <p>Loading events...</p>}
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.name.text}</h2>
          <p>{event.description.text}</p>
        </div>
      ))}
    </div>
  );
}