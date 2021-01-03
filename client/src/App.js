import React from 'react';
import { connect } from "react-redux";

import SignIn from '../tln-sign-in';
import Main from './Main';

const App = (props) => {
  const { user } = props;
  const { login } = user;

  return login ? <Main /> : <SignIn />;
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(/* dispatch */) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
