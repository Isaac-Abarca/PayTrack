// src/components/Home.jsx
import { Link } from 'react-router-dom';
import DebtList from '../components/DebtList';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div>
        <div className="add-debt-btn-container">
          <Link to="/add-debt" className="add-debt-btn">
            <span className="truncate">AGREGAR DEUDA</span>
          </Link>
        </div>
        <DebtList />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;



