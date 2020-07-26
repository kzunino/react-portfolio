import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import {Route, Switch} from 'react-router-dom';

//Import Components
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Locals from './components/Locals';
import Forecast from './components/Forecast';
import Contact from './components/Contact';
import Instagram from './components/Instagram';
import Footer from './components/Footer';

const App = ({history}) => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/project' component={Project} />
        <Route path='/forecast' component={Forecast} />
        <Route path='/locals' component={Locals} />
      </Switch>

      <Contact />
      {history.location.pathname === '/' ? <Instagram /> : null}
      <Footer />
    </div>
  );
};

export default App;
