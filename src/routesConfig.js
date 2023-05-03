import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./App/pages/homePage/home";
import DetailsScreen from "./App/pages/details/Details";
import ContactUs from "./App/pages/contactUs";
import Team from "./App/pages/team";
import SignInPage from "./App/pages/signIn";
import Admin from "./App/pages/admin";
import LayOut from "./layout/AppLayOut";

const routes = [
  {
    path: "/",
    element: LayOut(<HomePage />),
  },
  {
    path: "details",
    element: LayOut(<DetailsScreen />),
    errorElement: <HomePage />,
  },
  {
    path: "contactus",
    element: LayOut(<ContactUs />),
    errorElement: <HomePage />,
  },
  { path: "team", element: LayOut(<Team />), errorElement: <HomePage /> },
  {
    path: "signIn",
    element: <SignInPage />,
    errorElement: <HomePage />,
  },
  { path: "admin", element: LayOut(<Admin />), errorElement: <Admin /> },
];
const router = createBrowserRouter(routes);

export default router;
