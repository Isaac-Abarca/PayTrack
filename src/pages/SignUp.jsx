import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import EyeIcon from '../assets/EyeIcon';
import '../styles/SignUp.css';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError('Error al registrarse: ' + error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <div className="header-top">
          <div className="text-[#1C1D22] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z"></path>
            </svg>
          </div>
          <h2>PayTrack</h2>
        </div>
        <h1 className="signup-title">Registro</h1>
      </div>
      <form onSubmit={handleSignUp} className="signup-form">
        {error && <p className="error">{error}</p>}
        <label>
          <p>Nombre completo</p>
          <input
            type="text"
            placeholder="JonhDoe"
            required
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            placeholder="JonhDoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <p>Contraseña</p>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <EyeIcon onClick={togglePasswordVisibility} />
          </div>
        </label>
        <label>
          <p>Confirmar contraseña</p>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <EyeIcon onClick={togglePasswordVisibility} />
          </div>
        </label>
        <button type="submit" className="signup-button">
          Registrarse
        </button>
      </form>
      <div>
        <p className="signup-footer">
          <Link to="/">¿Ya tienes una cuenta? Iniciar sesión</Link>
        </p>
        <p className="signup-footer">
          <Link to="/forgot-password">Olvidé mi contraseña</Link>
        </p>
        <div className="h-5 bg-[#F9FAFA]"></div>
      </div>
    </div>
  );
};

export default SignUp;
