// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Menu = ({ setHomeBgColor }) => {
  const [cn, setCn] = useState('');

  const handleClick = (page) => {
    setHomeBgColor(page);
    setCn('disabled');
    setTimeout(() => {
      setCn('');
    }, 500);
  };

  return (
    <nav className="menu">
      <ul className="navbar">
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/"
            activeClassName="active"
            onClick={() => handleClick('')}
          >
            Accueil
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/a-propos"
            activeClassName="active"
            onClick={() => handleClick('about')}
          >
            A propos
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/experiences"
            activeClassName="active"
          >
            Expériences
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/competences"
            activeClassName="active"
          >
            Mes compétences
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/mes-projets"
            activeClassName="active"
          >
            Mes projets
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className={cn}
            exact
            to="/me-contacter"
            activeClassName="active"
          >
            Me contacter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  setHomeBgColor: PropTypes.func,
};

Menu.defaultProps = {
  setHomeBgColor: () => {},
};

// == Export
export default Menu;
