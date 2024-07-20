/* eslint-disable react/prop-types */
// src/components/DebtInfoRow.jsx
import '../styles/DebtDetails.css';

const DebtInfoRow = ({ label, value }) => {
  return (
    <div className="debt-info-row">
      <p className="info-label">{label}:</p>
      <p className="info-value">{value}</p>
    </div>
  );
};

export default DebtInfoRow;
