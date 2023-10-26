import { makeAutoObservable, toJS } from "mobx";
import { JokeInterface } from "../interfaces/jokesStoreInterfaces";

export default class JokesStore {
    _jokes: Array<JokeInterface>;
    constructor() {
        this._jokes = [];
        makeAutoObservable(this);
    }

    setJoke(joke: Array<JokeInterface>): void {
        this._jokes = joke;
    }

    allJokes(): Array<JokeInterface> {
        return toJS(this._jokes);
    }
}