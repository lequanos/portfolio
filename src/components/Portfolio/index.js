// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import
import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import About from 'src/components/About';
import './styles.scss';

// == Composant
const Portfolio = () => (
  <div className="home">
    <Menu />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/a-propos">
        <About />
      </Route>
    </Switch>
  </div>
);

// == Export
export default Portfolio;
