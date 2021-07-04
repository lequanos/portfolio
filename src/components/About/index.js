// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const About = () => (
  <>
    <aside className="about__picture" />
    <div className="about__text">
      <div>
        <h2 className="text__large">
          A propos
        </h2>
        <p className="text__small">
          Après avoir travaillé pendant près de 15 ans dans le domaine de la restauration,
          dont les 8 dernières en tant que directeur de restaurant,
          j'ai profité comme tant d'autres personnes du confinement pour changer d'air
          et me lancer dans le développement web, et je ne regrette pas du tout !
          <br />
          <br />
          Ainsi, j'ai commencé la formation fullstack JS avec <a href="https://oclock.io" target="_blank" rel="noreferrer">l'école O'Clock </a>
          qui a débuté en novembre 2020, et s'est terminée en mai 2021.
          Cela m'a permis d'acquérir de solides compétences en Javascript,
          avec notamment ReactJS en Front-End et
          NodeJs en Back-End avec le framework Express.
          <br />
          <br />
          Au-delà de tout ça, je suis également le très heureux papa d'un petit garçon,
          qui me rend fier tous les jours !
        </p>
      </div>
    </div>
  </>
);

// == Export
export default About;
