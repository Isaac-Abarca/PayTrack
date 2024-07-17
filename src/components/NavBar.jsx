// src/components/NavBar.jsx
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import BellIcon from '../assets/BellIcon';
import ChatIcon from '../assets/ChatIcon';
import AddIcon from '../assets/AddIcon';
import '../styles/navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="nav-item active">
        <HomeIcon />
         {/** <p>Inicio</p>*/}
      </Link>
      <Link to="/search" className="nav-item inactive">
        <SearchIcon />
        {/**<p>Buscar</p> */}
        
      </Link>
      <Link to="/add-debt" className="nav-item inactive">
        <AddIcon />
        {/**<p>Agregar</p> */}
        
      </Link>
      <Link to="/notifications" className="nav-item inactive">
        <BellIcon />
        {/** <p>Notificaciones</p>*/}
        
      </Link>
      <Link to="/chat" className="nav-item inactive">
        <ChatIcon />
        {/** <p>Chat</p> */}
        
      </Link>
    </div>
  );
};

export default NavBar;

