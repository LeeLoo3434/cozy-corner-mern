import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import NavBar from '../../components/Navbar/Navbar';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      // <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      </Routes>
    </main>
  );
}
