import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import WordCloudChart from './components/WordCloudChart';

const routes = (
  <Route path="echarts">
    <Route path="word-cloud" component={WordCloudChart}/>
  </Route>
);

export default routes;
