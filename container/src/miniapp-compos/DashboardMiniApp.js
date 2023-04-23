import { mount } from 'dashboard/DashboardMiniApp';
// container is react application
import React, { useRef, useEffect } from 'react';

export default () => {
  const dashboardMa = useRef(null);

  useEffect(() => {
    mount(dashboardMa.current);
  }, []);

  return <div ref={dashboardMa} />;
};
