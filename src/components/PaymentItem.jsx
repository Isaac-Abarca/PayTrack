/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/PaymentItem.jsx
// src/components/PaymentItem.jsx
import { useState } from 'react';
import '../styles/DebtDetails.css';
import CurrencyDollarIcon from '../assets/CurrencyDollarIcon '

const PaymentItem = ({ date, amount, receiptImageUrl, method }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isCash = () => {
    if (method === 'efectivo') return true
    return false
  }

  return (
    <div className="payment-item">
      <div className="payment-info">
        <div className="payment-details">
          <p className="payment-date">{date}</p>
          <p className="payment-amount">${amount}</p>
          <p className="payment-method">{method}</p>
        </div>
      </div>
      <div>
        {isCash() ?  
          <CurrencyDollarIcon />
          :
          <div className="payment-img" onClick={handleImageClick}>
            <img src={receiptImageUrl} alt="Comprobante de Pago" className="receipt-image" />
          </div>
        }
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img onClick={handleCloseModal} src={receiptImageUrl} alt="Comprobante de Pago" className="modal-image" />

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentItem;


