// src/components/AddDebt.jsx

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const AddDebt = () => {
  const [deudor, setDeudor] = useState("");
  const [acreedor, setAcreedor] = useState("");
  const [montoInicial, setMontoInicial] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "deudas"), {
        deudor,
        acreedor,
        montoInicial: parseFloat(montoInicial),
        descripcion,
        fechaCreacion: new Date()
      });
      setDeudor("");
      setAcreedor("");
      setMontoInicial("");
      setDescripcion("");
      alert('Deuda agregada exitosamente');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error al agregar la deuda: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Agregar Deuda</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Deudor</label>
          <input
            type="text"
            value={deudor}
            onChange={(e) => setDeudor(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Acreedor</label>
          <input
            type="text"
            value={acreedor}
            onChange={(e) => setAcreedor(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Monto Inicial</label>
          <input
            type="number"
            value={montoInicial}
            onChange={(e) => setMontoInicial(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md">
            Agregar Deuda
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDebt;
