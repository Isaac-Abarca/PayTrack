/* eslint-disable react/prop-types */
import { useState } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebaseConfig';
import toast from 'react-hot-toast';
import ValidatedInput from '../components/ValidatedInput';
import '../styles/AddPaymentForm.css';

const AddPaymentForm = ({ debtId, onClose }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('efectivo');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: 'Por favor, seleccione una imagen.',
      }));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl('');
  };

  const validate = () => {
    const newErrors = {};
    if (!date) newErrors.date = 'La fecha es requerida.';
    if (!amount) newErrors.amount = 'El monto es requerido.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    let fileURL = '';
    if (selectedImage) {
      const storageRef = ref(storage, `comprobantes/${selectedImage.name}`);
      const snapshot = await uploadBytes(storageRef, selectedImage);
      fileURL = await getDownloadURL(snapshot.ref);
    }

    const payment = {
      date,
      amount: parseFloat(amount),
      method,
      receiptImageUrl: fileURL,
    };

    try {
      const debtRef = doc(db, 'deudas', debtId);
      await updateDoc(debtRef, {
        payments: arrayUnion(payment),
      });
      toast.success('Pago agregado exitosamente');
      onClose();
    } catch (error) {
      toast.error('Error al agregar el pago: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-payment-form">
      <ValidatedInput
        label="Fecha"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        error={errors.date}
      />
      <ValidatedInput
        label="Monto"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={errors.amount}
      />
      <ValidatedInput
        label="Método de Pago"
        as="select"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        error={errors.method}
      >
        <option value="efectivo">Efectivo</option>
        <option value="transaccion">Transacción</option>
        <option value="sinpe">SINPE</option>
      </ValidatedInput>
      {(method === 'transaccion' || method === 'sinpe') && (
        <div className="input-container">
          {!imagePreviewUrl && (
            <label className="input-label">
              <p className="input-title">Adjuntar Comprobante</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="form-input"
              />
              {errors.file && <p className="input-error-message">{errors.file}</p>}
            </label>
          )}
          {imagePreviewUrl && (
            <div>
              <p className="input-title">Comprobante adjunto</p>
              <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
              <button type="button" onClick={handleRemoveImage} className="mt-2 text-red-500">
                Eliminar imagen
              </button>
            </div>
          )}
        </div>
      )}
      <button type="submit" className="add-payment-btn">
        Agregar Pago
      </button>
    </form>
  );
};

export default AddPaymentForm;
