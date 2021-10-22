import React from 'react';
import styles from './style.module.scss';

interface InputParams {
  label: string;
  required?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

function InputText (params: InputParams) {
  const className = [styles.myInput, params.className].filter(Boolean).join(" ");

  return (
    <div className={className}>
      <label>{params.label}</label>
      <input
        type="text"
        value={params.value}
        onChange={params.onChange}
        required={params.required || false}
      />
    </div>
  )
}

export default InputText;
