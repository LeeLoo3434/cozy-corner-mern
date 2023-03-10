import { useEffect, useState } from "react";
import EventForm from "../../components/EventForm/EventForm";
import * as eventsAPI from "../../utilities/events-api";

export default function ProfilePage({ user, setUser, events }) {
  const [event, setEvent] = useState([""]);

  useEffect(function () {
    async function getEvent() {
      const list = await eventsAPI.getAllEvents();
      setEvent(list);
    }
    getEvent();
  }, []);

  async function addEvent(newEvent) {
    const eventResponse = await eventsAPI.addEvent(newEvent);
    setEvent([...event, eventResponse]);
  }

  async function deleteEvent(delEvent) {
    await eventsAPI.deleteEvent(delEvent._id);
    const eventCopy = [...event];
    const newEvents = eventCopy.filter((e) => e._id !== delEvent._id);
    setEvent(newEvents);
  }

  async function editEvent(editedEvent) {
    const editedResponse = await eventsAPI.updateEvent(editedEvent);
    const updatedEvents = event.map((e) =>
      e._id === editedResponse._id ? editedResponse : e
    );
    setEvent(updatedEvents);
  }

  return (
    <>
    <div>
      <h1 className="h1">Create an Event</h1>
    </div>
      <EventForm addEvent={addEvent} />
      <div className="container">
        {event.map((item, key) => {
          return (
            <div className="justify-content-between">
              <ul className="col-12" item={item} key={key}>
                <li>{item.title}</li>
                <li>{item.description}</li>
                <li>{item.date}</li>
                <li>{item.location}</li>
              </ul>
              <button onClick={() => deleteEvent(item)} className="btn">
                X
              </button>
              <button onClick={() => editEvent(item)} className="btn">
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
