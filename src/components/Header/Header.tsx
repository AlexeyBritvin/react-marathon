import React from 'react';
import Logo from '../../icons/logo.svg';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className="container flex-row">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
