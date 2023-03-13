import UpdateEventForm from "../UpdateEventForm/UpdateEventForm";

export default function PropertyListItem({ event, updateEvent, deleteEvent }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <ul className="col-6">
          <li>{event.title}</li>
          <li>{event.description}</li>
          <li>{event.date}</li>
          <li>{event.location}</li>
        </ul>
        <button onClick={() => deleteEvent(event)} className="btn">
          X
        </button>

        <UpdateEventForm event={event} updateEvent={updateEvent} />
      </div>
    </>
  );
}