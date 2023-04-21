import React from 'react'
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import { marketingRoutes } from "./routes";
// import { RoutingStrategy } from "./types";

/* interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
} */

export function createRouter({ strategy, initialEntries }) {
  if (strategy === 'browser') {
    return createBrowserRouter(marketingRoutes);
  }

  /* const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(marketingRoutes, { initialEntries: initialEntries }); */
  return createMemoryRouter(marketingRoutes, { ...initialEntries });
}
