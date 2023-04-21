import React, { ReactElement, useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { marketingRoutes } from "../routes/routes";

/* interface NavigationManagerProps {
  children: ReactElement;
} */

export function NavigationManager({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function containerNavigationHandler(event) {
      const pathname = event.detail;
      if (location.pathname === pathname || !matchRoutes(marketingRoutes, { pathname })) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener("[container] navigated", containerNavigationHandler);

    return () => {
      window.removeEventListener("[container] navigated", containerNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[marketing-miniapp] navigated', { detail: location.pathname })
    );
  }, [location]);

  return children;
}
