import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//Import Components
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/project' component={Project} />
        </Switch>

        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

