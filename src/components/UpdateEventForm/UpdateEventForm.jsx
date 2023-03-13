import { useState } from "react";

export default function UpdateEventForm({ event, updateEvent }) {
  const [updateEventForm, setUpdateEventForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    updateEvent(event._id, updateEventForm);
    setUpdateEventForm({
      title: "",
      description: "",
      date: "",
      location: "",
    });
  }

  function handleChange(evt) {
    let newUpdateEventForm = {
      ...updateEventForm,
      [evt.target.name]: evt.target.value,
    };
    setUpdateEventForm(newUpdateEventForm);
  }

  return (
    <form className="eventform" onSubmit={handleSubmit}>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          value={updateEventForm.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={updateEventForm.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          value={updateEventForm.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          name="location"
          type="text"
          value={updateEventForm.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Event</button>
    </form>
  );
}
