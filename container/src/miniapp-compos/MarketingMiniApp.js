import React, { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'marketing/MarketingMiniApp'

const MarketingMiniApp = ({browserHistory}) => {
  const mktMa = useRef(null)
  const location = useLocation();
  const navigate = useNavigate();

  const mountMktMa = useCallback(() => {
    mount(mktMa.current, {
      location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
        // browserHistory.push(pathname);
      }
    });
  }, [location, navigate]);

  useEffect(() => {
    mountMktMa();

    return () => {
      mount(mktMa.current, { location, onNavigate: () => null });
    };
  }, [mountMktMa]);


  /* const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount marketing MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount(mktMa.current, {
        // mountPoint: mktMa.current,
        location
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []); */

  // createRoot(mktMa.current).render(<div />);
  // Render the component using createRoot instead of ReactDOM.render()
  // id="marketing-mfe"
  return <div ref={mktMa} />
}

export default MarketingMiniApp
