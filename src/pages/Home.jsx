// src/components/Home.jsx
import '../styles/Home.css';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout >
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
    </Layout>
  );
};

export default Home;



