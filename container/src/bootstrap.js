import React from 'react'
import * as ReactDomClient from 'react-dom/client';

import App from './App'

// container is the root, it should always shows immediately in browser, so no mount func
ReactDomClient.createRoot(document.querySelector('#container-root')).render(<App />)
/* const root = ReactDomClient.createRoot(document.querySelector('#container-root'));
root.render(<App />); */
