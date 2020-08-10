import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TeamsEngine from './pages/TeamsEngine';
import SeasonEngine from './pages/SeasonEngine';
import DisputeMonthEngine from './pages/DisputeMonthEngine';


function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={TeamsEngine} />
      <Route path="/season/engine" component={SeasonEngine} />
      <Route path="/dispute/month" component={DisputeMonthEngine} />
    </BrowserRouter>
  )
}

export default Routes;
