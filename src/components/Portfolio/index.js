// == Import npm
import React, { useEffect, useRef, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import About from 'src/components/About';
import Experiences from 'src/components/Experiences';
import './styles.scss';

// == Composant
const Portfolio = () => {
  const homeElement = useRef(null);
  const [homeEl, setHomeEl] = useState(null);

  useEffect(() => {
    setHomeEl(homeElement.current);
  }, [homeElement]);

  return (
    <div className="home" ref={homeElement}>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/a-propos">
          <About />
        </Route>
        <Route exact path="/experiences">
          <Experiences homeElement={homeEl} />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default Portfolio;
