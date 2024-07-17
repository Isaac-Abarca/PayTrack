import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../styles/AddDebt.css";

const AddDebt = () => {
  const [deudor, setDeudor] = useState("");
  const [acreedor, setAcreedor] = useState("");
  const [montoInicial, setMontoInicial] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [comprobante, setComprobante] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileURL = "";
      if (comprobante) {
        const storageRef = ref(storage, `comprobantes/${comprobante.name}`);
        const snapshot = await uploadBytes(storageRef, comprobante);
        fileURL = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "deudas"), {
        deudor,
        acreedor,
        montoInicial: parseFloat(montoInicial),
        descripcion,
        fechaCreacion: new Date(),
        comprobante: fileURL,
      });

      setDeudor("");
      setAcreedor("");
      setMontoInicial("");
      setDescripcion("");
      setComprobante(null);
      alert('Deuda agregada exitosamente');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error al agregar la deuda: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label className="input-label">
          <p className="input-title">Deudor</p>
          <input
            type="text"
            value={deudor}
            onChange={(e) => setDeudor(e.target.value)}
            placeholder="Ingrese el nombre del deudor"
            required
            className="form-input"
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label">
          <p className="input-title">Acreedor</p>
          <input
            type="text"
            value={acreedor}
            onChange={(e) => setAcreedor(e.target.value)}
            placeholder="Ingrese el nombre del acreedor"
            required
            className="form-input"
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label">
          <p className="input-title">Monto Inicial</p>
          <input
            type="number"
            value={montoInicial}
            onChange={(e) => setMontoInicial(e.target.value)}
            placeholder="Ingrese el monto inicial"
            required
            className="form-input"
          />
        </label>
      </div>
      <div className="input-container">
        <label className="input-label">
          <p className="input-title">Descripción</p>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ingrese una descripción"
            className="form-input textarea"
          />
        </label>
      </div>
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
      <div className="add-debt-btn-container">
        <button type="submit" className="add-debt-btn">
          {loading ? "Guardando..." : "Agregar Deuda"}
        </button>
      </div>
    </form>
  );
};

export default AddDebt;
