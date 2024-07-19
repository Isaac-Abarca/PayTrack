/* eslint-disable react/prop-types */
// src/components/Header.jsx
import { useState } from 'react';
import ListIcon from '../assets/ListIcon';
import GearIcon from '../assets/GearIcon';
import SettingsModal from './SettingsModal';
import '../styles/Header.css';

const Header = ({ title = "Gestor de deudas"  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGearClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <div className="header-icon">
        <ListIcon />
      </div>
      <h2 className="header-title">{title}</h2>
      <div className="header-icon" onClick={handleGearClick}>
        <GearIcon />
      </div>
      {isModalOpen && <SettingsModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
