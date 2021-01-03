import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from "react-redux";

import SignIn from '../tln-sign-in';
import Main from './Main';

const App = (props) => {
  // const { t } = useTranslation();

  const { user } = props;
  const { login } = user;

  // return <h1>{t('App')}</h1>
  return login ? <Main /> : <SignIn />;
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(App);
