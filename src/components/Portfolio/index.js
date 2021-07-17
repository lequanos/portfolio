// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// == Import
import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import About from 'src/components/About';
import Experiences from 'src/components/Experiences';
import './styles.scss';

// == Composant
const Portfolio = () => {
  const location = useLocation();
  const homeElement = useRef(null);
  const [homeEl, setHomeEl] = useState(null);
  const [homeBgColor, setHomeBgColor] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [controls, setControls] = useState();
  const [cn, setCn] = useState('home');

  useEffect(() => {
    setHomeEl(homeElement.current);
  }, [homeElement]);

  useEffect(() => {
    setCn(`home ${homeBgColor}`);
  }, [homeBgColor]);

  return (
    <div className={cn} ref={homeElement}>
      <Menu
        setHomeBgColor={setHomeBgColor}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
        controls={controls}
      />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
          <Route exact path="/a-propos">
            <About
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
          <Route exact path="/experiences">
            <Experiences homeElement={homeEl} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default Portfolio;
