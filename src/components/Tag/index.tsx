import React from 'react';
import styles from './style.module.scss';

export interface TagType {
  name: string;
  color: string;
}

interface TagProps extends TagType {
  onClick: React.MouseEventHandler;
  close: React.MouseEventHandler;
  className: string;
}

function Tag (props: TagProps) {

  const className = ['tag', props.className].filter(Boolean).join(" ");

  return (
    <div className={className}>
      {props.name}
      <div className={styles.closeBtn}>X</div>
    </div>
  );
}

export default Tag;
