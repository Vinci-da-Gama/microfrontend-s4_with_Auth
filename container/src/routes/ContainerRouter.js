import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import containerRoutes from "./containerRoutes";

const browserRouter = createBrowserRouter(containerRoutes);

const ContainerRouter = () => {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default ContainerRouter
