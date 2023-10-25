import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import JokesStore from './store/JokesStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      jokes: new JokesStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);