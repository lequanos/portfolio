// == Import npm
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// == Import
import './styles.scss';

// == Composant
const Home = () => (
  <>
    <aside className="home__picture" />
    <div className="home__text">
      <div>
        <h1 className="text__large">
          Quân Tran Van Ba
        </h1>
        <h2 className="text__medium">
          Développeur Front-End ReactJs
        </h2>
        <h2 className="text__medium">
          Développeur Back-End NodeJs
        </h2>
        <p className="text__small">
          Bienvenue !
        </p>
        <p className="text__small">
          Faites comme chez vous et j'espère que la visite vous plaira !
        </p>
      </div>
      <div>
        <a href="https://github.com/lequanos" target="_blank" rel="noreferrer">
          <SiGithub className="text__icon" size={40} />
        </a>
        <a href="https://www.linkedin.com/in/quan-tranvanba/" target="_blank" rel="noreferrer">
          <SiLinkedin className="text__icon" size={40} />
        </a>
      </div>
    </div>
  </>
);

// == Export
export default Home;
