// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Menu = () => (
  <nav className="menu">
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink exact to="/a-propos" activeClassName="active">
          A propos
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink exact to="/experiences" activeClassName="active">
          Expériences
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink exact to="/competences" activeClassName="active">
          Mes compétences
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink exact to="/mes-projets" activeClassName="active">
          Mes projets
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink exact to="/me-contacter" activeClassName="active">
          Me contacter
        </NavLink>
      </li>
    </ul>
  </nav>
);

// == Export
export default Menu;
