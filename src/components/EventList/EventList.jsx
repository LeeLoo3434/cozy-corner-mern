import EventItem from "../EventItem/EventItem";

export default function GoalList({ events }) {
  <div className="container col-12">
    {events.map((event, key) => (
      <EventItem event={event} key={event._id} />
    ))}
  </div>;
}