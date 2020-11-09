import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PokedexPage from './pages/Pokedex/Pokedex';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
      </Switch>
    </Router>
  );
};

export default App;
