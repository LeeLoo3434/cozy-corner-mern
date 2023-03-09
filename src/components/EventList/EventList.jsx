

function EventList({ events }) {
    return (
    <div>
        {events.map((event) => (
        <div key={event._id}>
          {/* render each event */}
    </div>
    ))}
    </div>
    );
}

export default function EventList({ events }) {
  return <div>{/* render the list of events */}</div>;
}
