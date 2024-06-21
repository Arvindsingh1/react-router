import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Home , About , User ,Github } from "./components";
import { fetchInfo } from "./components/Github/Github";
  

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        loader : fetchInfo,
        element: <Github />,
      },
      

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRoute} />
  </React.StrictMode>
);
