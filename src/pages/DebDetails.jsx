import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import '../styles/DebtDetails.css';
import Layout from '../components/Layout';
import DebtInfoRow from '../components/DebtInfoRow';
import PaymentItem from '../components/PaymentItem';
import AddPaymentForm from '../components/AddPaymentForm';
import Loading from '../components/Loading';

const DebtDetails = () => {
  const { id } = useParams();
  const [deuda, setDeuda] = useState(null);
  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeuda = async () => {
      setLoading(true);
      const docRef = doc(db, 'deudas', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDeuda(docSnap.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchDeuda();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!deuda) {
    return <div>No se encontró la deuda.</div>;
  }

  return (
    <Layout title="Detalles de la deuda">
      <div className="debt-details-container">
        <div className="debt-info">
          <DebtInfoRow label="Deudor" value={deuda.deudor} />
          <DebtInfoRow label="Acreedor" value={deuda.acreedor} />
          <DebtInfoRow label="Monto Inicial" value={`$${deuda.montoInicial.toFixed(2)}`} />
          <DebtInfoRow label="Monto Actual" value={`$${deuda.montoInicial.toFixed(2)}`} />
          <DebtInfoRow label="Descripción" value={deuda.descripcion} />
        </div>
        <div className="add-payment-container">
          <button className="add-payment-btn" onClick={() => setShowAddPaymentForm(true)}>Agregar Pago</button>
          {showAddPaymentForm && (
            <AddPaymentForm debtId={id} onClose={() => setShowAddPaymentForm(false)} />
          )}
          <h3 className="payments-title">Pagos Registrados</h3>
          {deuda.payments?.map((payment, index) => (
            <PaymentItem
              key={index}
              date={payment.date}
              amount={payment.amount}
              receiptImageUrl={payment.receiptImageUrl}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DebtDetails;


