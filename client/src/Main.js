import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import * as actions from '../src/state/actions';

import Autologout from '../tln-autologout';
// import Header from './Header/Header';
// import Content from './Content/Content';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const { user, logoutUser } = props;

  return (
    <div className={classes.root}>
      <Autologout logoutTimeout={user.logoutTimeout} logoutUser={logoutUser} debug={true} />
      <CssBaseline />
      {/* <Header />
      <Content /> */}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: bindActionCreators(actions.logoutUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
