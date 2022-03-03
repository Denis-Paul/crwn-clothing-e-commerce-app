import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null; // unsubscribe method

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // open subscription between the app and firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else { // TODO: check if this else is really needed
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    // unsubscribe
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // action obj is passed to every reducer
});

export default connect(null, mapDispathToProps)(App);
