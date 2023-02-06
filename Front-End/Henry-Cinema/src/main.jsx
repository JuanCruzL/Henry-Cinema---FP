import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Components/Home/Home";
import App from "./App";
import store from "./store/index";
import Details from "./Components/Details/Details";
import "./index.css";
import Movies from "./Components/Movies/Movies"
import Login from "./Components/Login/login"


const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Foods></Foods>,
  },
  {
    path: "movie/:id",
    element: <Details />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

root.render(
  <div id="Switch" className="light-mode">
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>

          <App />
        </RouterProvider>
      </Provider>
    </React.StrictMode>
  </div>
);
