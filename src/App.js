import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user})
    })
  }

  render (){
    return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
