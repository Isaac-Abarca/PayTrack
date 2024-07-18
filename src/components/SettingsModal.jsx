/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/SettingsModal.jsx
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import UserIcon from '../assets/UserIconConfig';
import GearIcon from '../assets/GearIcon';
import SignOutIcon from '../assets/SignOutIcon';
import PathIcon from '../assets/PathIcon';
import "../styles/SettingsModal.css";

const SettingsModal = ({ onClose }) => {
    const { currentUser } = useAuth();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            onClose();
        } catch (error) {
            console.error("Error signing out: ", error.message);
        }
    };

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
                    <div className="modal-item" onClick={handleSignOut}>
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
