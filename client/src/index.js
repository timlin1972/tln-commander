import React from 'react';
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import '../tln-i18n-react';

import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main")
);
