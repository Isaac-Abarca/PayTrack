// src/pages/AddDebtPage.jsx

import AddDebt from '../components/AddDebt';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const AddDebtPage = () => {
  return (
      <div>
      <Header />
        <div className="min-h-screen pb-20">
          <h1 className="text-center text-3xl font-bold pt-4">Agregar Nueva Deuda</h1>
          <AddDebt />
        </div>
        <NavBar />
      </div>
  );
};

export default AddDebtPage;

