import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { useStrict } from "mobx";
import { BrowserRouter } from "react-router-dom";

import App from "./Container/App";
import "./index.css";

//store
import todoStore from "./stores/todostore";

const stores = {
  todoStore
};

useStrict(true);

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
