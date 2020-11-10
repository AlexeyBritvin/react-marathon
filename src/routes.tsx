import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PokedexPage from './pages/Pokedex/Pokedex';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <PokedexPage />,
};

export default routes;
