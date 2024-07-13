/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import  CurrencyDollarIcon  from '../assets/CurrencyDollarIcon ';
import '../styles/DebtItem.css'

const DebtItem = ({ deuda }) => {
  return (
    <div className="debt-item">
      <div className="debt-item-info">
        <div className="icon-container">
          <CurrencyDollarIcon />
        </div>
        <div className="debt-details">
          <p className="debt-title">Deudor: {deuda.deudor}</p>
          <p className="debt-subtitle">Acreedor: {deuda.acreedor} Monto Inicial: {deuda.montoInicial}</p>
          <p className="debt-subtitle">Descripción: {deuda.descripcion}</p>
        </div>
      </div>
      <Link to="/debdetails" className="debt-link">Ver detalles</Link>
    </div>
  );
};

export default DebtItem;



