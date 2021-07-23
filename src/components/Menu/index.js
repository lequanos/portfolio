// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// == Import
import categoriesData from 'src/data/categoriesData';
import './styles.scss';

// == Composant
const Menu = ({
  setPageIndex,
  pageIndex,
  controls,
}) => {
  const handleClick = (e, nextPageIndex) => {
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
    else if (nextPageIndex === pageIndex) {
      e.preventDefault();
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

  return (
    <nav className="menu">
      <ul className="navbar">
        {categoriesData.map((category, index) => (
          <li key={category.id} className="navbar__item">
            <NavLink
              exact
              to={category.url}
              activeClassName="active"
              onClick={(e) => handleClick(e, index)}
            >
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  setPageIndex: PropTypes.func,
  controls: PropTypes.shape({
    start: PropTypes.func,
  }),
  pageIndex: PropTypes.number,
};

Menu.defaultProps = {
  setPageIndex: () => {},
  controls: {},
  pageIndex: 0,
};

// == Export
export default Menu;
