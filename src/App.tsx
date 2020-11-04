import React from 'react';
import cn from 'classnames';

import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <div className="container">
          <div className={cn(styles.header, 'color')}>This is App Component!</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
