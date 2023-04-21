import React, { lazy, Suspense } from "react";
import { Navigate/* , Outlet */ } from "react-router-dom";

// import { Layout } from "../components/Layout";
import ROUTE_PATHS from "../constants/routePaths";
import Layout from '../compos/Layout'
// import MarketingMiniApp from '../miniapp-compos/MarketingMiniApp'

// ??
const MarketingMiniApp = lazy(() => import("../miniapp-compos/MarketingMiniApp"));
// const App2Lazy = lazy(() => import("../components/App2"));


const containerRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`${ROUTE_PATHS.marketing}`} />,
      },
      {
        path: `/*`, // `/${ROUTE_PATHS.marketing}/*`
        element: <Suspense fallback="Loadin Marketing mini app...">
          <div>ta...</div>
        </Suspense>,
      },
      {
        path: `${ROUTE_PATHS.auth}/*`,
        element: <Suspense fallback="Loading Auth mini app..."><div>Hi Auth...</div></Suspense>
      },
    ],
  }
];

export default containerRoutes
