// src/components/Home.jsx
import DebtList from '../components/DebtList';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="debt-summary">
        <div className="summary-item">
          <p className="summary-title">Total Adeudado</p>
          <p className="summary-value">$5000</p>
        </div>
        <div className="summary-item">
          <p className="summary-title">Próximo Pago</p>
          <p className="summary-value">15/05/2023</p>
        </div>
        <div className="summary-item">
          <p className="summary-title">Deudas Activas</p>
          <p className="summary-value">8</p>
        </div>
      </div>
      <DebtList />
      <NavBar />
    </div>
  );
};

export default Home;



