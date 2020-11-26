import React, { PropsWithChildren, ReactElement } from 'react';
import Pokemon from './components/Pokemon/Pokemon';
import HomePage from './pages/HomePage/HomePage';
import PokedexPage from './pages/Pokedex/Pokedex';

interface Routes {
  [key: string]: (props: PropsWithChildren<any>) => ReactElement;
}

export enum RouteLinks {
  Main = '/',
  Pokedex = '/pokedex',
  Legendaries = '/legendaries',
  Documentation = '/documentation',
  Pokemon = '/pokedex/:id',
}

interface Menu {
  title: string;
  link: RouteLinks;
  component: (props: PropsWithChildren<any>) => ReactElement;
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

const SECOND_ROUTES: Menu[] = [
  { title: 'Pokemon', link: RouteLinks.Pokemon, component: ({ id }) => <Pokemon id={id} /> },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc, item) => {
  acc[item.link] = item.component;
  return acc;
}, {} as Routes);

export default routes;
