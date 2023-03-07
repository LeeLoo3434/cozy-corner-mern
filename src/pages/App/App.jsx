import './App.css';
import { useState } from 'react';
import { getUser } from '../../utilities/users-service'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage'
import DashboardPage from '../DashboardPage/DashboardPage'
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
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}