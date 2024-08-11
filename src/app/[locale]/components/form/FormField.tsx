import React, { useState } from "react";
import { FormFieldProps } from "../../types/types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber = false,
  label,
  required = false,
  icon,
  togglePasswordVisibility = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="required-indicator">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={isPasswordVisible && togglePasswordVisibility ? "text" : type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber })} // Correctly using register
          id={name}
          aria-required={required}
          className={`input-with-icon ${error ? "border-red-500" : ""}`}
        />
        {icon && <span className="icon">{icon}</span>}
        {togglePasswordVisibility && (
          <span className="toggle-password-icon" onClick={toggleVisibility}>
            {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
      </div>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default FormField;
