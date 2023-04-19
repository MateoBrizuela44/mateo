import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokeProvider } from './context/pokeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokeProvider>
    <App />
  </PokeProvider>
);

