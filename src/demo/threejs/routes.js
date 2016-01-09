import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import HelloWorld from './helloworld/components/HelloWorld';

const routes = (
  <Route path="three.js">
    <Route path="hello-world" component={HelloWorld}/>
  </Route>
);

export default routes;
