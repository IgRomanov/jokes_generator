export interface JokeInterface {
    id: number,
    joke: string,
};
    
export interface JokesStoreInterface {
  jokes: {
    setJoke: (joke: Array<JokeInterface>) => void;
    allJokes: () => Array<JokeInterface>;
  }
};

export interface JokesValueInterface {
    setJoke: (joke: Array<JokeInterface>) => void;
    allJokes: () => Array<JokeInterface>;
};