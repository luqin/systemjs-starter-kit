import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      { require('./echarts/routes') }
      { require('./threejs/routes') }

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);

export default router;
