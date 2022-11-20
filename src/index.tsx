import { Provider as StoreProvider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';


import store from './store';

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StoreProvider store={store} >
        <App />
    </StoreProvider>
);
