import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./reset.css";
import "./index.scss";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-grid.css";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Provider store={Store}>
      <App />
    </Provider>
  </SnackbarProvider>,
  document.getElementById("root")
);
