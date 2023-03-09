import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as eventsAPI from "../../utilities/events-api";

export default function NewEventForm({ event, setEvent }) {
  const navigate = useNavigate();

  function handleChange(evt) {
    setEvent({
      ...event,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formDataCopy = { ...event };
      delete formDataCopy.error;
      await eventsAPI.addEvent(formDataCopy);
      navigate("/events");
    } catch {
      setEvent({
        ...event,
        error: "Failed to add event",
      });
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            name="link"
            value={event.link}
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Event</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{event.error}</p>
    </div>
  );
}
