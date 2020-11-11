import React from 'react';
import cn from 'classnames';

import styles from './Heading.module.scss';

export interface HeadingProps {
  type: 'l' | 'm' | 's' | 'xs';
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ type, children, className = '' }) => {
  switch (type) {
    case 'l':
    default:
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;

    case 'm':
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;

    case 's':
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;

    case 'xs':
      return <h4 className={cn(styles.h4, className)}>{children}</h4>;
  }
};

export default Heading;
