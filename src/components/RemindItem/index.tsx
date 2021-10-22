import React from 'react';
import styles from '../style.module.scss';

// Export this interface to use in functions.ts file.
// A type interface use to pass data in state.
export interface ReminderItemType {
  task: string;
  timeStamp: Date;
  person?: string
  checked?: boolean;
}

interface ReminderItemParams extends ReminderItemType {
  onClick: React.MouseEventHandler;
  classes: string;
}

function ReminderItem (params: ReminderItemParams) {
  const { task, timeStamp, person, checked, onClick, classes } = params;

  const isChecked = checked ? styles.checked : null;
  const className = [styles.wrapper, classes, isChecked].filter(Boolean).join(" ");
  return (
    <li onClick={onClick} className={className}>
      <input
        type="checkbox"
        checked={checked}
        readOnly
      />
      <span>{task}</span>
      <span>{person}</span>
      <span>{timeStamp}</span>
    </li>
  )

}

export default ReminderItem;
