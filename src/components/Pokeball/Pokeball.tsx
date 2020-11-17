import React from 'react';
import cn from 'classnames';

import styles from './Pokeball.module.scss';

export interface PokeballProps {
  className?: string;
}

const Pokeball: React.FC<PokeballProps> = ({ className = '' }) => {
  return (
    <div className={cn(styles.ball, className)}>
      <div className={styles.ballBottom}></div>
      <div className={styles.ballTop}></div>
      <div className={styles.ballInner}></div>
    </div>
  );
};

export default Pokeball;
