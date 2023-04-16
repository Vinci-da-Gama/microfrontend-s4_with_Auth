import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'marketing/MarketingMiniApp'

const MarketingMiniApp = ({ browserHistory }) => {
  const mktMa = useRef(null)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    mount(mktMa.current, {
      location: location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
      },
    });
  }, [location, navigate]); // may no need navigate

  // createRoot(mktMa.current).render(<div />);
  // Render the component using createRoot instead of ReactDOM.render()

  return <div ref={mktMa} />
}

export default MarketingMiniApp
