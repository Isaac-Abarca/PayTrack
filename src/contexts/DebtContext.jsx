/* eslint-disable react/prop-types */
// src/contexts/DebtContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const DebtContext = createContext();

export const DebtProvider = ({ children }) => {
  const [deudas, setDeudas] = useState([]);

  useEffect(() => {
    const fetchDeudas = async () => {
      const querySnapshot = await getDocs(collection(db, 'deudas'));
      setDeudas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    const unsubscribe = onSnapshot(collection(db, 'deudas'), (snapshot) => {
      setDeudas(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    fetchDeudas();

    return () => unsubscribe();
  }, []);

  return (
    <DebtContext.Provider value={{ deudas, setDeudas }}>
      {children}
    </DebtContext.Provider>
  );
};

export const useDebts = () => useContext(DebtContext);
