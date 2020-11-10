import { A, usePath } from 'hookrouter';
import React from 'react';
import cn from 'classnames';
import { GENERAL_MENU } from '../../routes';

import styles from './Navbar.module.scss';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const path = usePath();
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        {GENERAL_MENU.map(({ title, link }) => (
          <li key={title}>
            <A
              href={link}
              className={cn(styles.menuLink, {
                [styles.activeLink]: link === path,
              })}>
              {title}
            </A>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
