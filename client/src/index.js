import React from 'react';
import { render } from "react-dom";

import { Provider } from "react-redux";

import { ApolloProvider } from "@apollo/client";

import '../tln-i18n-react';
import client from '../tln-graphql-client';
import store from "./state/reducers";

import App from './App';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("main")
);
