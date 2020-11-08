import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
