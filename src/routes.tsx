import React, { ReactElement } from 'react';
import HomePage from './pages/HomePage/HomePage';
import PokedexPage from './pages/Pokedex/Pokedex';

interface Routes {
  [key: string]: () => ReactElement;
}

interface Menu {
  title: string;
  link: string;
  component: () => ReactElement;
}

export const GENERAL_MENU: Menu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <></>,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <></>,
  },
];

const routes = GENERAL_MENU.reduce((acc, item) => {
  acc[item.link] = item.component;
  return acc;
}, {} as Routes);

export default routes;
