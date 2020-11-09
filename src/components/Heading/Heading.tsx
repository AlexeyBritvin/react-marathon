import React from 'react';

import styles from './Heading.module.scss';

export interface HeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4';
}

const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  switch (type) {
    case 'h1':
    default:
      return <h1 className={styles.h1}>{children}</h1>;

    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;

    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;

    case 'h4':
      return <h4 className={styles.h4}>{children}</h4>;
  }
};

export default Heading;
