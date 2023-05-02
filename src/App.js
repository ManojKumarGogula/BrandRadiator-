import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routesConfig";
import "./app.css";

const App = () => {
  useEffect(() => {
    scrollTo(0, 0);
  });
  return <RouterProvider router={router} />;
};

export default App;
