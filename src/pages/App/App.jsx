import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/Navbar/Navbar';
import NewEventPage from '../NewEventPage/NewEventPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    link: '',
    location: '',
    creator: '',
  });

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/events/new"
              element={<NewEventPage event={event} setEvent={setEvent} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
