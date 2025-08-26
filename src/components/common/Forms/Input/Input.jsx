// src/components/common/Forms/Input/Input.jsx
import PropTypes from "prop-types";
import React from "react";
import { StyledInputBase } from "./StyledInput.jsx";

/**
 * Componente Input genérico para toda la aplicación con placeholder simple.
 * Ahora soporta refs externas con forwardRef.
 */
const Input = React.forwardRef(
  (
    {
      id,
      type,
      placeholder,
      value,
      onChange,
      required = false,
      name,
      style,
      className,
      min,
      max,
      readOnly,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledInputBase
        ref={ref} // <-- Pasamos el ref aquí
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        max={max}
        readOnly={readOnly}
        className={className}
        style={style}
        {...rest}
      />
    );
  }
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
};

Input.displayName = "Input";

export default Input;
