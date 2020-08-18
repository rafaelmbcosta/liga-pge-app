import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ListTeam from './pages/ListTeam';
import SeasonEngine from './pages/SeasonEngine';
import DisputeMonthEngine from './pages/DisputeMonthEngine';


function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ListTeam} />
      <Route path="/season/engine" component={SeasonEngine} />
      <Route path="/dispute/month" component={DisputeMonthEngine} />
    </BrowserRouter>
  )
}

export default Routes;
