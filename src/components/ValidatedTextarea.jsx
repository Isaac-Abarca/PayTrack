/* eslint-disable react/prop-types */
// src/components/ValidatedTextarea.jsx


const ValidatedTextarea = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  ...props
}) => {
  return (
    <div className="input-container">
      <label className="input-label">
        <p className="input-title">{label}</p>
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input textarea ${error ? 'input-error' : ''}`}
          {...props}
        />
       <p className={`input-error-message ${error ? 'visible' : ''}`}>{error}</p>
      </label>
    </div>
  );
};

export default ValidatedTextarea;
