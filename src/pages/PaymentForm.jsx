import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import toast from 'react-hot-toast';
import ValidatedInput from '../components/ValidatedInput';
import Layout from '../components/Layout';
import '../styles/AddPaymentForm.css';
import { db, storage } from '../firebaseConfig';

const AddPaymentForm = () => {
  const { id } = useParams(); // Obtener el ID de la deuda desde la URL
  const [fechaPago, setFechaPago] = useState('');
  const [montoPago, setMontoPago] = useState('');
  const [metodoPago, setMetodoPago] = useState('');
  const [comprobante, setComprobante] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setComprobante(file);
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
    setComprobante(null);
    setImagePreviewUrl('');
  };

  const validate = () => {
    const newErrors = {};
    if (!fechaPago) {
      newErrors.fechaPago = 'La fecha es requerida.';
    } else if (!validarFecha(fechaPago)) {
      newErrors.fechaPago = 'La fecha debe de tener el formato de día/mes/año';
    }
    if (!montoPago) newErrors.montoPago = 'El monto es requerido.';
    if (!metodoPago) newErrors.metodoPago = 'El método de pago es requerido.';
    if ((metodoPago === 'transferencia' || metodoPago === 'sinpe') && !comprobante) {
      newErrors.comprobante = 'El comprobante es requerido para transacciones o SINPE.';
    }
    return newErrors;
  };

  const validarFecha = (fecha) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(fecha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);

    try {
      let fileURL = '';
      if (comprobante) {
        const storageRef = ref(storage, `comprobantes/${id}/${comprobante.name}`);
        const snapshot = await uploadBytes(storageRef, comprobante);
        fileURL = await getDownloadURL(snapshot.ref);
      }

      const newPayment = {
        fechaPago,
        montoPago: parseFloat(montoPago),
        metodoPago,
        comprobante: fileURL,
      };

      const deudaRef = doc(db, 'deudas', id);
      await updateDoc(deudaRef, {
        pagos: arrayUnion(newPayment),
      });

      toast.success('Pago agregado exitosamente');
      setFechaPago('');
      setMontoPago('');
      setMetodoPago('');
      setComprobante(null);
      setImagePreviewUrl('');
      setErrors({});
    } catch (error) {
      console.error('Error adding payment: ', error);
      toast.error('Error al agregar el pago: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Agregar pagos">
      <form onSubmit={handleSubmit} className="add-payment-form">
        <ValidatedInput
          label="Fecha del Pago"
          value={fechaPago}
          onChange={(e) => setFechaPago(e.target.value)}
          placeholder="dd/mm/aaaa"
          error={errors.fechaPago}
        />
        <ValidatedInput
          label="Monto del Pago"
          type="number"
          value={montoPago}
          onChange={(e) => setMontoPago(e.target.value)}
          placeholder="Ingrese el monto del pago"
          error={errors.montoPago}
        />
        <div className="input-container">
          <label className="input-label">
            <p className="input-title">Método de Pago</p>
            <select
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              className="form-input"
            >
              <option value="">Seleccione un método de pago</option>
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia</option>
              <option value="sinpe">SINPE</option>
            </select>
            {errors.metodoPago && <p className="input-error-message">{errors.metodoPago}</p>}
          </label>
        </div>
        {(metodoPago === 'transferencia' || metodoPago === 'sinpe') && (
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
        <div className="btn-container">
          <button type="submit" className="btn-default" disabled={loading}>
            {loading ? 'Guardando...' : 'Agregar Pago'}
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default AddPaymentForm;

