import React, { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'auth/AuthMiniApp'

const AuthMiniApp = () => {
  const authMa = useRef(null)
  const location = useLocation();
  const navigate = useNavigate();

  /* const mountAuthMa = useCallback(() => {
    mount(authMa.current, {
      location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
      }
    });
  }, [location, navigate]);

  useEffect(() => {
    mountAuthMa();
  }, [mountAuthMa]); */

  // createRoot(authMa.current).render(<div />);
  // Render the component using createRoot instead of ReactDOM.render()

  return <div ref={authMa} />
}

export default AuthMiniApp
