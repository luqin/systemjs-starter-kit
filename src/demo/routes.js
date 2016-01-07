import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import NoMatch from './components/NoMatch';
import WordCloudChart from './components/WordCloudChart';

var router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WordCloudChart}/>

      <Route path="echarts">
        <Route path="word-cloud" component={WordCloudChart}/>
      </Route>

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);

export default router;
