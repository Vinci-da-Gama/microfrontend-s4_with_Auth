import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'

const mount = (el, { location, onNavigate, defaultHistory }) => {
  console.log('8 -- marketing bootstrap location', location)
  console.log('9 -- marketing bootstrap onNavigate', onNavigate)
  console.log('10 -- marketing bootstrap defaultHistory', defaultHistory)
  const history = location
    ? createMemoryHistory({
        initialEntries: [location.pathname],
      })
    : defaultHistory

  if (onNavigate) {
    history.listen(({ location }) => onNavigate(location));
  }

  ReactDOMClient.createRoot(el).render(<App location={location || history.location} history={history} />)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() })
    // mount(devRoot)
  }
}

export { mount }
