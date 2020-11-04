import React from 'react';

import styles from './Navbar.module.scss';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const menu = [
    {
      label: 'Home',
      link: '#',
    },
    {
      label: 'Pokédex',
      link: '#',
    },
    {
      label: 'Legendaries',
      link: '#',
    },
    {
      label: 'Documentation',
      link: '#',
    },
  ];

  return (
    <nav>
      <ul className={styles.menu}>
        {menu.map((item) => (
          <li>
            <a href={item.link} className={styles.menuItem}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
