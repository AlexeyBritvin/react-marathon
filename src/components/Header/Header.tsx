import React from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';

import styles from './Header.module.scss';

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Layout className={styles.content}>
        <Logo />
        <Navbar />
      </Layout>
    </header>
  );
};

export default Header;
