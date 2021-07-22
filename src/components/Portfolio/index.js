// == Import npm
import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// == Import
import Home from 'src/components/Home';
import Menu from 'src/components/Menu';
import About from 'src/components/About';
import Experiences from 'src/components/Experiences';
import Skills from 'src/components/Skills';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import './styles.scss';

// == Composant
const Portfolio = () => {
  const location = useLocation();
  const [pageIndex, setPageIndex] = useState(0);
  const [controls, setControls] = useState();

  return (
    <div className="home">
      <Menu
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
            <Experiences
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
          <Route exact path="/competences">
            <Skills
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
          <Route exact path="/mes-projets">
            <Projects
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
          <Route exact path="/me-contacter">
            <Contact
              controls={controls}
              setControls={setControls}
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

// == Export
export default Portfolio;
