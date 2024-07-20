/* eslint-disable react/prop-types */
// src/components/PaymentItem.jsx
import '../styles/DebtDetails.css';

const PaymentItem = ({ date, amount, receiptImageUrl }) => {
  return (
    <div className="payment-item">
      <div className="payment-info">
        <div className="payment-details">
          <p className="payment-date">Fecha del Pago</p>
          <p className="payment-amount">{date}</p>
        </div>
      </div>
      <div className="payment-amount">${amount}</div>
      {receiptImageUrl && (
        <div className="receipt-image-container">
          <img src={receiptImageUrl} alt="Comprobante de Pago" className="receipt-image" />
        </div>
      )}
    </div>
  );
};

export default PaymentItem;

