/* import React, { useRef, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"; */
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { mount } from 'marketing/MarketingMiniApp'

// console.log('5 -- just have a look mount func: ', mount)

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

  return <div ref={mktMa} />
}

export default MarketingMiniApp
