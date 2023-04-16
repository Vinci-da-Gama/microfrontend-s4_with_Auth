import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

// let root = null;

const mount = (el, { location, onNavigate, defaultHistory }) => {
  console.log('8 -- marketing bootstrap location', location)
  console.log('9 -- marketing bootstrap onNavigate', onNavigate)
  console.log('10 -- marketing bootstrap defaultHistory', defaultHistory)
  /* if (!el) {
    root = null;
    return;
  } */

  const history = location
    ? createMemoryHistory({
        initialEntries: [location.pathname],
      })
    : defaultHistory

  if (onNavigate) {
    history.listen(({ location }) => onNavigate(location));
  }

  // use this to avoid root already defined in container app warning:
  /* Warning is: rning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it. */
  // Although it fixes the warning, but cause page no change back to home error, no fully successful.
  /* root = root ? root : ReactDOMClient.createRoot(el);
  root.render(<App location={location || history.location} history={history} />); */
  ReactDOMClient.createRoot(el).render(<App location={location || history.location} history={history} />)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}

export { mount }
