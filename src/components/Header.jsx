
import ListIcon from '../assets/ListIcon';
import GearIcon from '../assets/GearIcon';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <ListIcon />
      </div>
      <h2 className="header-title">Gestión de Deudas</h2>
      <div className="header-icon">
        <GearIcon />
      </div>
    </div>
  );
};

export default Header;
