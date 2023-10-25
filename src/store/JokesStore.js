import { makeAutoObservable, toJS } from "mobx";

export default class JokesStore {
    constructor() {
        this._jokes = [];
        makeAutoObservable(this);
    }

    setJoke(joke) {
        this._jokes = joke;
    }

    get jokes() {
        return toJS(this._jokes);
    }
}