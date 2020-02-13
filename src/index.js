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
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
