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
import HomeDash from "./Components/Dashboard Admin/home/HomeDash";
import NewUsers from "./Components/Dashboard Admin/users/NewUsers";
import LoginDash from "./Components/Dashboard Admin/login/Login";
import UserId from "./Components/Dashboard Admin/users/Userid";
import Users from "./Components/Dashboard Admin/users/Users";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/dashboard",
    element: <HomeDash />,
  },
  {
    path: "/dashboard/login",
    element: <LoginDash />,
  },
  {
    path: "/dashboard/users",
    element: <Users />,
  },
  {
    path: "/dashboard/user/:id",
    element: <UserId />,
  },
  {
    path: "/dashboard/userlist/new",
    element: <NewUsers />,
  },
  {
    path: "/dashboard/reviews",
    element: <Reviews />, // falta crear componente.
  },
  {
    path: "/dashboard/reviews/:id",
    element: <ReviewId />, // falta crear el componente.
  },
  {
    path: "/dashboard/reviews/new",
    element: <NewReviews />,
  },
  {
    path: "/dashboard/tickets",
    element: <Tickets />,
  },
  {
    path: "/dashboard/tickets/:id",
    element: <TicketId />,
  },
  {
    path: "/dashboard/tickets/new",
    element: <NewTickets />,
  },
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
