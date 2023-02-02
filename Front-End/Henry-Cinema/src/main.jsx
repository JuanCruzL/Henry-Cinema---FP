import React from "react";
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store/index";

const container = document.getElementById("root");
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
