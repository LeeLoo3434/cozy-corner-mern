import EventItem from "../../components/EventItem/EventItem";
import EventForm from "../../components/EventForm/EventForm";

export default function EventsPage({
    user,
    event,
    addEvent,
    deleteEvent,
    updateEvent,
}) {
    return (
    <>
        <h1>Create an Event</h1>
        <EventForm addEvent={addEvent} />
        <div className="container col-12">
        {event.map((event, idx) => (
            <EventItem
            event={event}
            key={idx}
            updateEvent={updateEvent}
            deleteEvent={deleteEvent}
            />
        ))}
        </div>
    </>
    );
}