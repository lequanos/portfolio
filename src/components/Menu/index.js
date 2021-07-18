// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Menu = ({
  setHomeBgColor,
  setPageIndex,
  pageIndex,
  controls,
}) => {
  const [menuItemClass, setMenuItemClass] = useState('navbar__item');
  const [aLinkClass, setALinkClass] = useState('');

  const handleClick = (page, nextPageIndex) => {
    setHomeBgColor(page);
    if (nextPageIndex > pageIndex) {
      controls.start({
        x: -2000,
        y: -2000,
        transition: {
          type: 'spring',
          duration: 1,
          ease: 'easeIn',
        },
      });
    }
    else {
      controls.start({
        x: 2000,
        y: 2000,
        transition: {
          type: 'spring',
          duration: 1,
          ease: 'easeIn',
        },
      });
    }
    setPageIndex(nextPageIndex);
  };

  useEffect(() => {
    switch (pageIndex) {
      case 0:
        setMenuItemClass('navbar__item');
        setALinkClass('');
        break;
      case 1:
        setMenuItemClass('navbar__item navbar__item--about');
        setALinkClass('about__link');
        break;
      case 2:
        setMenuItemClass('navbar__item navbar__item--experiences');
        setALinkClass('experiences__link');
        break;
      default:
        setMenuItemClass('navbar__item');
        setALinkClass('');
    }
  }, [pageIndex]);

  return (
    <nav className="menu">
      <ul className="navbar">
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => handleClick('', 0)}
            className={aLinkClass}
          >
            Accueil
          </NavLink>
        </li>
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/a-propos"
            activeClassName="active"
            onClick={() => handleClick('about', 1)}
            className={aLinkClass}
          >
            A propos
          </NavLink>
        </li>
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/experiences"
            activeClassName="active"
            onClick={() => handleClick('experiences', 2)}
            className={aLinkClass}
          >
            Expériences
          </NavLink>
        </li>
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/competences"
            activeClassName="active"
            className={aLinkClass}
          >
            Mes compétences
          </NavLink>
        </li>
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/mes-projets"
            activeClassName="active"
            className={aLinkClass}
          >
            Mes projets
          </NavLink>
        </li>
        <li className={menuItemClass}>
          <NavLink
            exact
            to="/me-contacter"
            activeClassName="active"
            className={aLinkClass}
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
  setPageIndex: PropTypes.func,
  controls: PropTypes.shape({
    start: PropTypes.func,
  }),
  pageIndex: PropTypes.number,
};

Menu.defaultProps = {
  setHomeBgColor: () => {},
  setPageIndex: () => {},
  controls: {},
  pageIndex: 0,
};

// == Export
export default Menu;
