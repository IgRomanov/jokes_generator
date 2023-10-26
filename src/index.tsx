import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import JokesStore from './store/JokesStore';

interface JokeInterface {
    id: number,
    joke: string,
}

interface JokesStoreInterface {
  jokes: {
    setJoke: (joke: Array<JokeInterface>) => void;
    allJokes: () => Array<JokeInterface>;
  }
}

export const Context = createContext<JokesStoreInterface | null>(null);

// const contextValue = {{
  
// }}

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