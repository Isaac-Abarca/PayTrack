/* eslint-disable react/prop-types */
// src/components/ValidatedInput.jsx


const ValidatedInput = ({
    label,
    type = "text",
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
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`form-input ${error ? 'input-error' : ''}`}
                    {...props}
                />
                 <p className={`input-error-message ${error ? 'visible' : ''}`}>{error}</p>
            </label>
        </div>
    );
};

export default ValidatedInput;
