import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./App/pages/homePage/home";
import DetailsScreen from "./App/pages/details/Details";
import ContactUs from "./App/pages/contactUs";
import Analysis from "./App/pages/analysis";
import Team from "./App/pages/team";
import SignInPage from "./App/pages/signIn";
import Admin from "./App/pages/admin";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "details", element: <DetailsScreen />, errorElement: <HomePage /> },
  { path: "contactus", element: <ContactUs />, errorElement: <HomePage /> },
  { path: "analysis", element: <Analysis />, errorElement: <HomePage /> },
  { path: "team", element: <Team />, errorElement: <HomePage /> },
  { path: "signIn", element: <SignInPage />, errorElement: <HomePage /> },
  { path: "admin", element: <Admin />, errorElement: <Admin /> },
];
const router = createBrowserRouter(routes);

export default router;
