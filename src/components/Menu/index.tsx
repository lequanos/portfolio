// == Import npm
import * as React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import categoriesData from '../../data/categoriesData';
import './styles.scss';

// == Type
type MenuProps = {
  setPageIndex: React.Dispatch<number>;
  pageIndex: number;
  controls: AnimationControls;
}

// == Composant
const Menu = ({
  setPageIndex,
  pageIndex,
  controls,
}: MenuProps) => {
  const navControls = useAnimation();

  const bgColorMap = [
    '#E4E0D9',
    '#4F6492',
    '#877DA3',
    '#5E827D',
    '#8CA0CF',
    '#E99072',
  ];

  useEffect(() => {
    const asyncControls = async () => {
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
    };
    asyncControls();
  }, [pageIndex]);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, nextPageIndex: number) => {
    if (nextPageIndex > pageIndex) {
      controls.start({
        x: -2000,
        y: -2000,
        type: 'spring',
        transition: {
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
        type: 'spring',
        transition: {
          duration: 1,
          ease: 'easeIn',
        },
      });
    }
    setPageIndex(nextPageIndex);
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

// == Export
export default Menu;
