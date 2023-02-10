import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Components/Home/Home";
import App from "./App";
import store from "../src/redux/store";
import Details from "./Components/Details/Details";
import "./index.css";

import Movies from "./Components/Movies/Movies";
import HomeDash from "./Components/Dashboard Admin/home/HomeDash";
import NewUsers from "./Components/Dashboard Admin/users/NewUsers";
import LoginDash from "./Components/Dashboard Admin/login/Login";
import UserId from "./Components/Dashboard Admin/users/Userid";
import Users from "./Components/Dashboard Admin/users/Users";
import MoviesDash from "./Components/Dashboard Admin/movies/MoviesDash";
import NewMovie from "./Components/Dashboard Admin/movies/NewMovie";
import Genres from "./Components/Dashboard Admin/genres/Genres";
import NewGenre from "./Components/Dashboard Admin/genres/NewGenre";
import Reviews from "./Components/Dashboard Admin/reviews/Reviews";
import ReviewId from "./Components/Dashboard Admin/reviews/ReviewId";
import Screenings from "./Components/Dashboard Admin/screenings/Screenings";
import NewScreening from "./Components/Dashboard Admin/screenings/NewScreening";
import ScreeningId from "./Components/Dashboard Admin/screenings/ScreeningId";
import Combos from "./Components/Dashboard Admin/foodanddrinks/Combos";
import NewCombo from "./Components/Dashboard Admin/foodanddrinks/NewCombo";
import FoodsAdmin from "./Components/Dashboard Admin/foodanddrinks/Foods";
import NewFood from "./Components/Dashboard Admin/foodanddrinks/NewFood";
import Drinks from "./Components/Dashboard Admin/foodanddrinks/Drinks";
import NewDrink from "./Components/Dashboard Admin/foodanddrinks/NewDrink";
import Sales from "./Components/Dashboard Admin/sales/Sales";
import Login from "./Components/Login/login";
import Foods from "./Components/Foods/Foods";
import AboutUs from "./Components/AboutUs/AboutUs";
import Seating from "./Components/seating/Seating";
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
    element: <NewUsers />, // pendiente ver si creamos nuevos usuarios desde el dash.
  },
  {
    path: "/dashboard/movies",
    element: <MoviesDash />,
  },
  {
    path: "dashboard/movies/new",
    element: <NewMovie />,
  },
  {
    path: "dashboard/movies/genres",
    element: <Genres />,
  },
  {
    path: "dashboard/movies/newgenre",
    element: <NewGenre />,
  },
  {
    path: "/dashboard/reviews",
    element: <Reviews />,
  },
  {
    path: "/dashboard/reviews/:id",
    element: <ReviewId />,
  },
  {
    path: "/dashboard/screenings",
    element: <Screenings />,
  },
  {
    path: "/dashboard/screenings/:id",
    element: <ScreeningId />,
  },
  {
    path: "/dashboard/screenings/new",
    element: <NewScreening />,
  },
  {
    path: "/dashboard/combos",
    element: <Combos />,
  },
  {
    path: "dashboard/combos/new",
    element: <NewCombo />,
  },
  {
    path: "/dashboard/foods",
    element: <FoodsAdmin />,
  },
  {
    path: "/dashboard/foods/new",
    element: <NewFood />,
  },
  {
    path: "/dashboard/drinks",
    element: <Drinks />,
  },
  {
    path: "/dashboard/drinks/new",
    element: <NewDrink />,
  },
  {
    path: "/dashboard/sales",
    element: <Sales />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/foods",
    element: <Foods />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/seating",
    element: <Seating />,
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
