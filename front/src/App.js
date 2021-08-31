import React from 'react';
import Registration from './components/Auth/Registration/Registration';
import Login from './components/Auth/Login/Login';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import { AppProvider } from '@shopify/polaris';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";



export const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>

        <Header />
        {/* <Footer /> */}


        <Switch>
          <Route path='/' component={Container} exact />
          <Route path='/registration' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </AppProvider>


  );
}

