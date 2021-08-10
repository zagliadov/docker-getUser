import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Users } from './components/Users';
import { Main } from './components/Main';
import { User } from './components/User/User';



export const App = () => {

  return (
    <div className="container">
      <Router>
      <Main />
        <Switch>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/users/:id' component={User} />
        </Switch>

      </Router>
    </div>
  );
}

