import React from 'react';

import styles from './Header.module.scss';
import Logo from '../../icons/logo.svg';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className="container flex-row">
        <Logo />
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#" className={styles.menuItem}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>
                Pokédex
              </a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>
                Legendaries
              </a>
            </li>
            <li>
              <a href="#" className={styles.menuItem}>
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
