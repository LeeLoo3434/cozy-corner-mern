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

  return (
    <>
      <h1>Create an Event</h1>
      <EventForm addEvent={addEvent} />
      <div className="container col-12">
        {event.map((item, key) => {
          return (
            <div className="d-flex justify-content-between">
              <ul className="col-12" item={item} key={key}>
                <li>{item.title}</li>
                <li>{item.description}</li>
                <li>{item.date}</li>
                <li>{item.location}</li>
              </ul>
              <button onClick={() => deleteEvent(item)} className="btn">
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}