import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import HelloWorld from './helloworld/components/HelloWorld';
import Lesson1 from './lesson1/components/HelloWorld';

const routes = (
  <Route path="three.js">
    <Route path="hello-world" component={HelloWorld}/>
    <Route path="lesson1" component={Lesson1}/>
  </Route>
);

export default routes;
