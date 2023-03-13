import "./App.css";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import DashboardPage from "../DashboardPage/DashboardPage";
import NavBar from "../../components/Navbar/Navbar";
import ProfilePage from "../ProfilePage/ProfilePage";
import EditEventPage from "../EditEventPage/EditEventPage";
import EventsPage from "../EventsPage/EventsPage";
import * as eventsAPI from "../../utilities/events-api";

export default function App() {
  const [user, setUser] = useState(getUser());
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

  async function updateEvent(eventId, updateEvent) {
    const updatedEvent = await eventsAPI.updateEvent(eventId, updateEvent);
    const newUpdatedEvent = { ...updatedEvent };
    const foundEvent = event.findIndex((event) => event._id === eventId);
    const newEvents = [...event];
    newEvents[foundEvent] = newUpdatedEvent;
    setEvent(newEvents);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
            <Route path="/" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route
              path="/events"
              element={
                <EventsPage
                  user={user}
                  updateEvent={updateEvent}
                  addEvent={addEvent}
                  deleteEvent={deleteEvent}
                  event={event}
                />
              }
            />
            <Route
              path="/events/edit/:id"
              element={
                <EditEventPage
                  event={event}
                  updateEvent={updateEvent}
                  addEvent={addEvent}
                  deleteEvent={deleteEvent}
                />
              }
            ></Route>
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </>
      )}
    </main>
  );
}