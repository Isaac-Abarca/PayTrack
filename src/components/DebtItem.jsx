/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../styles/DebtItem.css';
import ArrowIcon from '../assets/ArrowIcon';

const DebtItem = ({ deuda }) => {
  return (
    <Link to={`/debtdetails/${deuda.id}`} className="debt-item">
      <div className="debt-item-info">
        <div className="debt-details">
          <p className="debt-title">{deuda.deudor}</p>
          <p className="debt-subtitle">${deuda.montoInicial}</p>
          <p className="debt-subtitle"> {deuda.descripcion}</p>
        </div>
      </div>
      <span className="debt-link"><ArrowIcon /></span>
    </Link>
  );
};

export default DebtItem;




