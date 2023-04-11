import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App'

const mount = (el) => {
  ReactDOMClient.createRoot(el).render(<App />)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
