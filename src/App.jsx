import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Carrers from "./Pages/Carrers/Carrers";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/carrers",
      element: <Carrers />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
