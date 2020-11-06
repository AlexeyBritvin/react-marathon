import React from 'react';

import styles from './Navbar.module.scss';

interface Menu {
  id: number;
  label: string;
  link: string;
}

const menu: Menu[] = [
  {
    id: 1,
    label: 'Home',
    link: '#',
  },
  {
    id: 2,
    label: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    label: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    label: 'Documentation',
    link: '#',
  },
];

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.root}>
      <ul className={styles.menu}>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.link} className={styles.menuLink}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
