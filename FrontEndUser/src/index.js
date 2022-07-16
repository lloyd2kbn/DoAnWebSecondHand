import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";
import i18n from './i18n';


ReactDOM.render(
  <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
