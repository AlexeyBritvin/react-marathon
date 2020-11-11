import React, { ReactElement } from 'react';
import HomePage from './pages/HomePage/HomePage';
import PokedexPage from './pages/Pokedex/Pokedex';

interface Routes {
  [key: string]: () => ReactElement;
}

export enum RouteLinks {
  Main = '/',
  Pokedex = '/pokedex',
  Legendaries = '/legendaries',
  Documentation = '/documentation',
}

interface Menu {
  title: string;
  link: RouteLinks;
  component: () => ReactElement;
}

export const GENERAL_MENU: Menu[] = [
  {
    title: 'Home',
    link: RouteLinks.Main,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: RouteLinks.Pokedex,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: RouteLinks.Legendaries,
    component: () => <></>,
  },
  {
    title: 'Documentation',
    link: RouteLinks.Documentation,
    component: () => <></>,
  },
];

const routes = GENERAL_MENU.reduce((acc, item) => {
  acc[item.link] = item.component;
  return acc;
}, {} as Routes);

export default routes;
