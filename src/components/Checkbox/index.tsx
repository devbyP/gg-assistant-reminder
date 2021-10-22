import React from 'react';
import styles from './style.module.scss';

interface CheckboxParams {
  className?: string;
  label: string;
  onClick: React.MouseEventHandler;
  required?: boolean;
  checked: boolean;
}

function Checkbox (params: CheckboxParams) {
  const className = [styles.myCheckbox, params.className].filter(Boolean).join(" ");
  return (
    <div className={className} onClick={params.onClick}>
      <input
        type="checkbox"
        checked={params.checked}
        required={params.required || false}
        readOnly
      />
      <label>{params.label}</label>
    </div>
  )
}

export default Checkbox;
