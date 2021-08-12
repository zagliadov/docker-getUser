import React from 'react';
import Cars from './components/Cars/Cars';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export const App = () => {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path='/cars' exact>
              <Cars />
          </Route>
          {/* <Route path='/cars/:id' component={Cars} /> */}
        </Switch>

      </Router>
    </div>
  );
}

