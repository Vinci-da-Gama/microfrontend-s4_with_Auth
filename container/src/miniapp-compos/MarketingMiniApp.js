import React, { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'marketing/MarketingMiniApp'

const MarketingMiniApp = () => {
  const mktMa = useRef(null)
  const location = useLocation();
  const navigate = useNavigate();

  const mountMktMa = useCallback(() => {
    mount(mktMa.current, {
      location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
      },
    });
  }, [location, navigate]);

  useEffect(() => {
    mountMktMa();
  }, [mountMktMa]);

  // createRoot(mktMa.current).render(<div />);
  // Render the component using createRoot instead of ReactDOM.render()

  return <div ref={mktMa} />
}

export default MarketingMiniApp
