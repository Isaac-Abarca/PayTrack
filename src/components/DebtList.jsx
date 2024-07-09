// src/components/DebtList.jsx

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import DebtItem from "./DebtItem";

const DebtList = () => {
  const [deudas, setDeudas] = useState([]);

  useEffect(() => {
    const fetchDeudas = async () => {
      const querySnapshot = await getDocs(collection(db, "deudas"));
      setDeudas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchDeudas();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 mb-11 hola">
      <h2 className="text-2xl font-bold mb-4">Lista de Deudas</h2>
      <div className="space-y-4">
        {deudas.map(deuda => (
          <DebtItem key={deuda.id} deuda={deuda} />
        ))}
      </div>
    </div>
  );
};

export default DebtList;


