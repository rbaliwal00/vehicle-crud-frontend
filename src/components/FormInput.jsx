import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput text-center">
      <label>{label}</label>
      <br/>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        className="input input-sm input-bordered w-full max-w-xs mb-2 "
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;