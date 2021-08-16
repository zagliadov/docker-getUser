import React from 'react';
import Home from './components/Home/Home';
import Registration from './components/Auth/Registration/Registration';
import Login from './components/Auth/Login/Login';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";



export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Switch>
        <Route path='/' component={Container} exact/>
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>

  );
}

