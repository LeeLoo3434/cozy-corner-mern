import { useState } from "react";
import './EventForm.css';
export default function EventForm({ addEvent }) {
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  function handleChange(evt) {
    let newEventForm = {
      ...eventForm,
      [evt.target.name]: evt.target.value,
    };
    setEventForm(newEventForm);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    addEvent(eventForm);
    setEventForm({
      title: "",
      description: "",
      date: "",
      location: "",
    });
  }

  return (
    <form className="eventform" onSubmit={handleSubmit}>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          value={eventForm.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={eventForm.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          value={eventForm.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          name="location"
          type="text"
          value={eventForm.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
}