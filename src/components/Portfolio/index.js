// == Import npm
import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// == Import
import Menu from 'src/components/Menu';
import BurgerMenu from 'src/components/BurgerMenu';
import useWindowSize from 'src/lib/useWindowSize';
import categoriesData from 'src/data/categoriesData';
import './styles.scss';

// == Composant
const Portfolio = () => {
  const location = useLocation();
  const [cn, setCn] = useState('home');
  const [pageIndex, setPageIndex] = useState(0);
  const [controls, setControls] = useState();
  const homeRef = useRef();
  const { width } = useWindowSize();

  const cnMap = [
    'home',
    'home home--about',
    'home home--experiences',
    'home home--skills',
    'home home--projects',
    'home home--contact',
  ];

  useEffect(() => {
    setCn(cnMap[pageIndex]);
    homeRef.current.scroll(0, 0);
  }, [pageIndex]);

  return (
    <div className={cn} ref={homeRef}>
      {width > 768
        ? (
          <Menu
            setPageIndex={setPageIndex}
            pageIndex={pageIndex}
            controls={controls}
          />
        ) : (
          <BurgerMenu
            setPageIndex={setPageIndex}
            pageIndex={pageIndex}
            controls={controls}
          />
        )}

      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          {categoriesData.map((category) => (
            <Route key={category.id} exact path={category.url}>
              <category.Component
                controls={controls}
                setControls={setControls}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              />
            </Route>
          ))}
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default Portfolio;
