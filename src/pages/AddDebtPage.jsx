// src/pages/AddDebtPage.jsx

import AddDebt from '../components/AddDebt';

const AddDebtPage = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-8">Agregar Nueva Deuda</h1>
      <AddDebt />
    </div>
  );
};

export default AddDebtPage;

