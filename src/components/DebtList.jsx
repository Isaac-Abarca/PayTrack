import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import DebtItem from './DebtItem';
import '../styles/DebtList.css'

const DebtList = () => {
  const [deudas, setDeudas] = useState([]);

  useEffect(() => {
    const fetchDeudas = async () => {
      const querySnapshot = await getDocs(collection(db, 'deudas'));
      setDeudas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchDeudas();
  }, []);

  return (
    <div className="debt-list">
      <h2 className="debt-list-title">Lista de Deudas</h2>
      <div className="debt-items">
        {deudas.map(deuda => (
          <DebtItem key={deuda.id} deuda={deuda} />
        ))}
      </div>
    </div>
  );
};

export default DebtList;



