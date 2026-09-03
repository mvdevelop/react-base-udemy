import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routs() {

  return (
    <>
      <Switch>
        <MyRoute exact path="/" component={Home} />
        <MyRoute exact path="/about" component={About} />
        <MyRoute exact path="/projects" component={Projects} />
        <MyRoute exact path="/contact" component={Contact} />
        <MyRoute exact path="/login" component={Login} />
        <MyRoute path="*" component={Page404} />
      </Switch>
    </>
  );
}