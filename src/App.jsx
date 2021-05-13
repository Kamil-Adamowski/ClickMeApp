import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/home';
import Achievements from './pages/achievements';
import Shop from './pages/shop';

const App = () => (
  <Router>
    <Switch>
      <Route path='/achievements'>
        <Achievements />
      </Route>
      <Route path='/shop'>
        <Shop />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route>
        <Redirect to='/home' />
      </Route>
    </Switch>
  </Router>
);

export default App;
