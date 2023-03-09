import { Link } from 'react-router-dom';
import './Navbar.css';
import { getUser } from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
      setUser(null)
  }

  return (
    <nav className='navbar'>
      <Link to="/">Cozy-Corner</Link>
      <div className="navbar__user">
        <Link to="/profile">Profile</Link>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}


