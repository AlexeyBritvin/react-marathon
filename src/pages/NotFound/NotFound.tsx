import React from 'react';
import { navigate } from 'hookrouter';

import styles from './NotFound.module.scss';

import TeamRocket from './assets/Team_Rocket.png';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { RouteLinks } from '../../routes';

export interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.errorWrap}>
        <span className={styles.error}>404</span>
      </div>
      <div className={styles.content}>
        <img src={TeamRocket} className={styles.image} alt="Team Rocket" />

        <Heading type="s">
          <span className={styles.highlighted}>The rocket team</span> has won this time.
        </Heading>

        <Button onClick={() => navigate(RouteLinks.Main)} color="yellow">
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
