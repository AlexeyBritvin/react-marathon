import React from 'react';

import styles from './Footer.module.scss';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container flex-row">
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
      </div>
    </footer>
  );
};

export default Footer;
