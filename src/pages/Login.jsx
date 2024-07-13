import  { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import EyeIcon from '../assets/EyeIcon';
import CreditCardIcon from '../assets/CreditCardIcon';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/Home";
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const handleGoogleLogin = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
      }
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="login-container">
        <header className="login-header">
          <div className="login-icon">
            <CreditCardIcon />
          </div>
          <h2 className="login-title">PayTrack</h2>
        </header>
        <main className="login-main">
          <h1 className="login-heading">Iniciar Sesión</h1>
          <form onSubmit={handleLogin} className="login-form">
            <div className="login-input-group">
              <label htmlFor="email" className="login-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="JonhDoe@example.com"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password" className="login-label">Contraseña</label>
              <div className="login-password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="**********"
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" className="login-password-toggle" onClick={togglePasswordVisibility}>
                  <EyeIcon show={showPassword} />
                </button>
              </div>
            </div>
            <div className="login-buttons">
              <button type="submit" className="login-button login-button-primary">Iniciar Sesión</button>
              <button type="button" onClick={handleGoogleLogin} className="login-button login-button-secondary">Iniciar Sesión con Google</button>
            </div>
          </form>
        </main>
        <footer className="login-footer">
          <p className="login-footer-text">¿Olvidaste tu contraseña?</p>
          <Link to="/signup" className="login-footer-link">¿No tienes una cuenta? Regístrate</Link>
        </footer>
      </div>
    );
  };
  
  export default Login;