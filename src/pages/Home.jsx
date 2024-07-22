// src/components/Home.jsx
import '../styles/Home.css';
import Layout from '../components/Layout';
import { useDebts } from '../contexts/DebtContext';
import { useEffect, useState } from 'react';


const Home = () => {
  const { deudas } = useDebts();
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [debtCount, setDebtCount] = useState(0);

  useEffect(() => {
    if (deudas.length === 0) {
      setTotalAmount('0.00');
      setDebtCount(0);
    } else {
      const total = deudas.reduce((sum, deuda) => {
        const pagosTotal = deuda.pagos?.reduce((sumPagos, pago) => sumPagos + parseFloat(pago.montoPago), 0) || 0;
        const montoActual = parseFloat(deuda.montoInicial) - pagosTotal;
        return sum + montoActual;
      }, 0);
      setTotalAmount(total.toFixed(2));
      setDebtCount(deudas.length);
    }
  }, [deudas]);
  
  return (
    <Layout >
      <div className="debt-summary">
        <div className="summary-item">
          <p className="summary-title">Total Adeudado</p>
          <p className="summary-value">${totalAmount}</p>
        </div>
        <div className="summary-item">
          <p className="summary-title">Próximo Pago</p>
          <p className="summary-value">15/05/2023</p>
        </div>
        <div className="summary-item">
          <p className="summary-title">Deudas Activas</p>
          <p className="summary-value">{debtCount}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;



