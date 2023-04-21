import React from 'react';
import { Outlet } from "react-router-dom";

import ROUTE_PATHS from '../constants/routePaths'
import { NavigationManager } from "../components/NavigationManager";
import Landing from '../components/Landing'
import Pricing from '../components/Pricing'

export const marketingRoutes = [
  {
    path: ROUTE_PATHS.landing,
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "",
        element: <Landing />,
      },
      {
        path: ROUTE_PATHS.pricing,
        element: <Pricing />,
      },
    ],
  },
];
