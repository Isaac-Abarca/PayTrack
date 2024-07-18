// src/pages/AddDebtPage.jsx

import AddDebt from '../components/AddDebt';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const AddDebtPage = () => {
  return (
      <div>
      <Header title={"Agregar Nueva Deuda"} />
        <div className="min-h-screen pb-20">
          <AddDebt />
        </div>
        <NavBar />
      </div>
  );
};

export default AddDebtPage;

