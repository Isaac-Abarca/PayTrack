/* eslint-disable react/prop-types */
// src/contexts/DebtContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useAuth } from './AuthContext';

const DebtContext = createContext();

export const DebtProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [deudas, setDeudas] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchDeudas = async () => {
      const q = query(collection(db, 'deudas'), where('userId', '==', currentUser.uid));
      const querySnapshot = await getDocs(q);
      setDeudas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) || []);
    };

    const unsubscribe = onSnapshot(query(collection(db, 'deudas'), where('userId', '==', currentUser.uid)), (snapshot) => {
      setDeudas(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })) || []);
    });

    fetchDeudas();

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <DebtContext.Provider value={{ deudas, setDeudas }}>
      {children}
    </DebtContext.Provider>
  );
};

export const useDebts = () => useContext(DebtContext);

