import React from 'react';
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import { ApolloProvider } from '@apollo/react-hooks';

import '../tln-i18n-react';
import client from '../tln-graphql-client';

import App from './App';

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("main")
);
