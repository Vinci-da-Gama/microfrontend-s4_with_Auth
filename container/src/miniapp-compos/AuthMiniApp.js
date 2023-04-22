import React, { useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'auth/AuthMiniApp'

const AuthMiniApp = ({browserHistory}) => {
  const authMa = useRef(null)
  const location = useLocation();
  const navigate = useNavigate();

  const mountAuthMa = useCallback(() => {
    mount(authMa.current, {
      location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
        // browserHistory.push(pathname);
      }
    });
  }, [location, navigate]);

  useEffect(() => {
    mountAuthMa();

    return () => {
      mount(authMa.current, { location, onNavigate: () => null });
    };
  }, [mountAuthMa]);

  return <div ref={authMa} />
}

export default AuthMiniApp
