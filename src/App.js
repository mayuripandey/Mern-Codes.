import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import User from './users/pages/User'; 
import NewPlaces from './places/pages/NewPlaces';

const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/" exact>
          <User />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Redirect to="/" />
        </Switch>
    </Router>
  ); 
};

export default App;