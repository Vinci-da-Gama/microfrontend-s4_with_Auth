import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const mount = (el) => {
  el.render(<h1>hi marketing...</h1>)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')
  const rootContainer = ReactDOMClient.createRoot(devRoot);
  if (rootContainer) {
    mount(rootContainer)
  }
}

export { mount }
