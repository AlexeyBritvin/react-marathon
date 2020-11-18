import React from 'react';
import Pokeball from '../Pokeball/Pokeball';

import styles from './Loader.module.scss';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.innerBox}>
        <Pokeball className={styles.pokeball} />
        <Pokeball className={styles.pokeball} />
        <Pokeball className={styles.pokeball} />
      </div>
    </div>
  );
};

export default Loader;
