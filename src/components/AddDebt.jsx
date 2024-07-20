// src/components/AddDebt.jsx
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { uploadFile, addDebt } from "../utils/firebaseUtils";
import toast from 'react-hot-toast';
import ValidatedInput from '../components/ValidatedInput';
import ValidatedTextarea from '../components/ValidatedTextarea';
import "../styles/AddDebt.css";

const AddDebt = () => {
  const { currentUser } = useAuth();
  const [deudor, setDeudor] = useState("");
  const [acreedor, setAcreedor] = useState("");
  const [montoInicial, setMontoInicial] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "Por favor, seleccione una imagen."
      }));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl("");
  };

  const validate = () => {
    const newErrors = {};
    if (!deudor) newErrors.deudor = "El nombre del deudor es requerido.";
    if (!acreedor) newErrors.acreedor = "El nombre del acreedor es requerido.";
    if (!montoInicial) newErrors.montoInicial = "El monto inicial es requerido.";
    if (!descripcion) newErrors.descripcion = "La descripción es requerida.";
    return newErrors;
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
      let fileURL = "";
      if (selectedImage) {
        fileURL = await uploadFile(selectedImage, `comprobantes/${selectedImage.name}`);
      }

      await addDebt({
        deudor,
        acreedor,
        montoInicial: parseFloat(montoInicial),
        descripcion,
        fechaCreacion: new Date(),
        comprobante: fileURL,
        userId: currentUser.uid,
        pagos: [] // Asegurar que se crea el array de pagos vacío
      });

      // Clear form fields
      setDeudor("");
      setAcreedor("");
      setMontoInicial("");
      setDescripcion("");
      setSelectedImage(null);
      setImagePreviewUrl("");

      // Clear errors
      setErrors({});
      
      toast.success('Deuda agregada exitosamente');
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error('Error al agregar la deuda: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ValidatedInput
        label="Deudor"
        value={deudor}
        onChange={(e) => setDeudor(e.target.value)}
        placeholder="Ingrese el nombre del deudor"
        error={errors.deudor}
      />
      <ValidatedInput
        label="Acreedor"
        value={acreedor}
        onChange={(e) => setAcreedor(e.target.value)}
        placeholder="Ingrese el nombre del acreedor"
        error={errors.acreedor}
      />
      <ValidatedInput
        label="Monto Inicial"
        type="number"
        value={montoInicial}
        onChange={(e) => setMontoInicial(e.target.value)}
        placeholder="Ingrese el monto inicial"
        error={errors.montoInicial}
      />
      <ValidatedTextarea
        label="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Ingrese una descripción"
        error={errors.descripcion}
      />
      <div>
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
      </div>
      <div className="btn-container">
        <button type="submit" className="btn-default">
          {loading ? "Guardando..." : "Agregar Deuda"}
        </button>
      </div>
    </form>
  );
};

export default AddDebt;
