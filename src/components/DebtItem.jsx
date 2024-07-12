/* eslint-disable react/prop-types */
// src/components/DebtItem.jsx

import { Link } from "react-router-dom";


const DebtItem = ({ deuda }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="text-gray-700 flex items-center justify-center rounded-lg bg-gray-100 w-12 h-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"
            ></path>
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-gray-900 text-lg font-medium">Deudor: {deuda.deudor}</p>
          <p className="text-gray-500">Acreedor: {deuda.acreedor} Monto Inicial: {deuda.montoInicial}</p>
          <p className="text-gray-500">Descripción: {deuda.descripcion}</p>
        </div>
      </div>
      <Link to="/debdetails">
      <span className="text-blue-600">Ver detalles</span>
      </Link>
    </div>
  );
};

export default DebtItem;


