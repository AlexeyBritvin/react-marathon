import { useRoutes } from 'hookrouter';
import React from 'react';
import NotFoundPage from './pages/NotFound/NotFound';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);

  return match || <NotFoundPage />;
};

export default App;
