import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import DashboardPage from '../DashboardPage/DashboardPage'
import EventsPage from '../EventsPage/EventsPage';
import NavBar from '../../components/Navbar/Navbar';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}