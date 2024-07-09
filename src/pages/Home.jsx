// src/components/Home.jsx

import { Link } from 'react-router-dom';
import DebtList from '../components/DebtList/';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-white">
      <div>
        <div className="flex flex-col gap-2 bg-[#FFFFFF] p-4 pb-2">
          <p className="text-[#1C160C] tracking-light text-[28px] font-bold leading-tight">Gestión de Deudas</p>
        </div>
        <div className="flex px-4 py-3 justify-center">
          <Link to="/add-debt" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">AGREGAR DEUDA</span>
          </Link>
        </div>
        <DebtList />
      </div>
      <NavBar />
    </div>
  );
};

export default Home;


