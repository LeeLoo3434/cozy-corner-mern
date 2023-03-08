import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Navbar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className='navbar'>
      <Link to="/dashboard">Cozy-Corner</Link>
      <div className="navbar__user">
        <Link to="/profile">Profile</Link>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}


