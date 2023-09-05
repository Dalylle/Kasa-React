import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Accommodation from "./Pages/Accommodation/Accommodation";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/accommodation/:id",
    element: <Accommodation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
