import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps {
  size?: 'small' | 'normal' | 'fullwidth';
  color?: 'green' | 'yellow';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ size = 'normal', color = 'green', children, onClick }) => {
  return (
    <button type="button" className={cn(styles.root, styles[size], styles[color])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
