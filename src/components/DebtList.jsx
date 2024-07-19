// src/components/DebtList.jsx
import DebtItem from './DebtItem';
import { useDebts } from '../contexts/DebtContext';
import '../styles/DebtList.css';

const DebtList = () => {
  const { deudas } = useDebts();

  return (
    <div className="debt-list">
      <div className="debt-items">
        {deudas.map(deuda => (
          <DebtItem key={deuda.id} deuda={deuda} />
        ))}
      </div>
    </div>
  );
};

export default DebtList;




