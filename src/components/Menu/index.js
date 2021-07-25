// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

// == Import
import categoriesData from 'src/data/categoriesData';
import './styles.scss';

// == Composant
const Menu = ({
  setPageIndex,
  pageIndex,
  controls,
}) => {
  // const [cn, setCn] = useState('menu');
  const navControls = useAnimation();

  // const cnMap = [
  //   'menu',
  //   'menu menu--about',
  //   'menu menu--experiences',
  //   'menu menu--skills',
  //   'menu menu--projects',
  //   'menu menu--contact',
  // ];

  const bgColorMap = [
    '#E4E0D9',
    '#4F6492',
    '#877DA3',
    '#5E827D',
    '#8CA0CF',
    '#E99072',
  ];

  useEffect(async () => {
    await navControls.start({
      backgroundColor: '#00000000',
      transition: {
        duration: 0,
      },
    });
    navControls.start({
      backgroundColor: bgColorMap[pageIndex],
      transition: {
        duration: 0,
        delay: 1,
      },
    });
  }, [pageIndex]);

  const handleClick = async (e, nextPageIndex) => {
    // navControls.start({
    //   backgroundColor: '#00000000',
    // });
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
      // navControls.start({
      //   backgroundColor: bgColorMap[nextPageIndex],
      //   transition: {
      //     delay: 1,
      //     duration: 0,
      //   },
      // });
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
      // navControls.start({
      //   backgroundColor: bgColorMap[nextPageIndex],
      //   transition: {
      //     delay: 1,
      //     duration: 0,
      //   },
      // });
    }
    setPageIndex(nextPageIndex);
    // setCn(cnMap[nextPageIndex]);
  };

  return (
    <motion.nav className="menu" animate={navControls}>
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
    </motion.nav>
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
