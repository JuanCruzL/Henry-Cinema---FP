import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Components/Home/Home";
import App from "./App";
import store from "./store/index";
import Details from "./Components/Details/Details";
import "./index.css";
import Movies from "./Components/Movies/Movies";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "movie/:id",
    element: <Details />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
