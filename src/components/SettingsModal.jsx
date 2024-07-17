/* eslint-disable react/prop-types */
// src/components/SettingsModal.jsx
import UserIcon from '../assets/UserIconConfig';
import GearIcon from '../assets/GearIcon';
import SignOutIcon from '../assets/SignOutIcon';
import PathIcon from '../assets/PathIcon';
import "../styles/SettingsModal.css";

const SettingsModal = ({ onClose }) => {

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-container" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>
                    <div className="close-icon"></div>
                </button>
                <div className="modal-body">
                    <div className="modal-item">
                        <div className="modal-item-icon">
                            <UserIcon />
                        </div>
                        <p className="modal-item-text">Perfil</p>
                        <div className="modal-item-path">
                            <PathIcon />
                        </div>
                    </div>
                    <div className="modal-item">
                        <div className="modal-item-icon">
                            <GearIcon />
                        </div>
                        <p className="modal-item-text">Configuración de la cuenta</p>
                        <div className="modal-item-path">
                            <PathIcon />
                        </div>
                    </div>
                    <div className="modal-item">
                        <div className="modal-item-icon">
                            <SignOutIcon />
                        </div>
                        <p className="modal-item-text">Cerrar sesión</p>
                        <div className="modal-item-path">
                            <PathIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;
