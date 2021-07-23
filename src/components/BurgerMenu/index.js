// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

// == Import
import categoriesData from 'src/data/categoriesData';
import './styles.scss';

// == Composant
const BurgerMenu = ({
  setPageIndex,
  pageIndex,
  controls,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const crossControls = useAnimation();
  const straightControls = useAnimation();
  const menuControls = useAnimation();

  const handleMenuClick = () => {
    if (!isOpen) {
      straightControls.start({
        scale: 0,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      crossControls.start({
        scale: 1,
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      setIsOpen(true);
    }
    else {
      straightControls.start({
        scale: 1,
        transition: {
          delay: 0.3,
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      crossControls.start({
        scale: 0,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      setIsOpen(false);
    }
  };

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
    <>
      <div className="burgerButton">
        <div className="burgerButton__close" onClick={handleMenuClick}>
          <motion.span
            animate={crossControls}
            initial={{
              x: '-45%',
              rotate: 45,
              scale: 0,
            }}
          />
          <motion.span
            animate={crossControls}
            initial={{
              x: '50%',
              rotate: -45,
              scale: 0,
            }}
          />
        </div>
        <div className="burgerButton__open" onClick={handleMenuClick}>
          <motion.span
            animate={straightControls}
          />
          <motion.span
            animate={straightControls}
          />
          <motion.span
            animate={straightControls}
          />
        </div>
      </div>
      <motion.nav className="burgerMenu" animate={menuControls}>
        <motion.ul className="burgerNavbar">
          {categoriesData.map((category, index) => (
            <li key={category.id} className="burgerNavbar__item">
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
        </motion.ul>
      </motion.nav>
    </>
  );
};

BurgerMenu.propTypes = {
  setPageIndex: PropTypes.func,
  controls: PropTypes.shape({
    start: PropTypes.func,
  }),
  pageIndex: PropTypes.number,
};

BurgerMenu.defaultProps = {
  setPageIndex: () => {},
  controls: {},
  pageIndex: 0,
};

// == Export
export default BurgerMenu;
