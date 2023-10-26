import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import JokesStore from './store/JokesStore';
import { JokesStoreInterface } from './interfaces/jokesStoreInterfaces';

export const Context = createContext<JokesStoreInterface | null>(null);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      jokes: new JokesStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);