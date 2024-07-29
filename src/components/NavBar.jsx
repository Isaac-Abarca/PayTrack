// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import CreditCardIcon from '../assets/CreditCardIcon';
import BellIcon from '../assets/BellIcon';
import ChatIcon from '../assets/ChatIcon';
import AddIcon from '../assets/AddIcon';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="nav-item active">
        <HomeIcon />
      </Link>
      <Link to="/listdebs" className="nav-item inactive">
        <CreditCardIcon />
      </Link>
      <Link to="/add-debt" className="nav-item inactive">
        <AddIcon />

      </Link>
      <Link to="/notifications" className="nav-item inactive">
        <BellIcon />

      </Link>
      <Link to="/chat" className="nav-item inactive">
        <ChatIcon />
      </Link>
    </div>
  );
};

export default NavBar;

