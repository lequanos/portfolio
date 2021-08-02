// == Import npm
import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

// == Import
import categoriesData from 'src/data/categoriesData';
import './styles.scss';

// == Type
type BurgerMenuProps = {
  setPageIndex: (arg: number) => void;
  pageIndex: number;
  controls: AnimationControls | undefined;
};

// == Composant
const BurgerMenu = ({
  setPageIndex,
  pageIndex,
  controls,
}: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const crossControls = useAnimation();
  const straightControls = useAnimation();
  const menuControls = useAnimation();

  const openBurgerMenu = async () => {
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
    if (controls) {
      await controls.start({
        opacity: 0,
      });
      controls.start({
        zIndex: 3,
      });
      await controls.start({
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
    }
    await menuControls.start({
      opacity: 1,
      zIndex: 4,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    });
    setIsOpen(true);
  };

  const closeBurgerMenu = async () => {
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
    await menuControls.start({
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    });
    menuControls.start({
      zIndex: -13,
    });
    if (controls) {
      await controls.start({
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      });
      controls.start({
        zIndex: -11,
      });
      controls.start({
        opacity: 1,
      });
    }
    setIsOpen(false);
  };

  const handleMenuClick = async () => {
    if (!isOpen) {
      openBurgerMenu();
    }
    else {
      closeBurgerMenu();
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    nextPageIndex: number,
  ) => {
    if (nextPageIndex > pageIndex && controls) {
      controls.start({
        x: -2000,
        y: -2000,
        transition: {
          type: 'spring',
          duration: 1,
        },
      });
    }
    else if (nextPageIndex === pageIndex) {
      e.preventDefault();
    }
    else if (controls) {
      controls.start({
        x: 2000,
        y: 2000,
        transition: {
          type: 'spring',
          duration: 1,
        },
      });
    }
    setIsOpen(false);
    closeBurgerMenu();
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
      <motion.nav
        className="burgerMenu"
        animate={menuControls}
        initial={{
          opacity: 0,
        }}
      >
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

// == Export
export default BurgerMenu;
