import React from 'react';
import Layout from '../Layout/Layout';

import styles from './Footer.module.scss';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Layout className={styles.content}>
        <div>
          <span>
            Make with
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </span>
        </div>
        <div>
          <span>Ours Team</span>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
