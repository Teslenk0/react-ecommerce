import React from "react";
import ReactDOM from "react-dom";
//Styles
import "./index.css";

//Main app
import App from "./App";

//Routing
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
