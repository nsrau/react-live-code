import { createStore } from 'redux';
import { HTML_TYPE, CodeActionTypes, JS_TYPE, CSS_TYPE, StateReducer } from './types';

export const INITIAL_STATE: StateReducer = {
    html: '<h1 class="title"></h1>',
    js: `let title = document.querySelector("h1");
    title.innerText = 'React Live Code :)';`,
    css: '.title {color: red}'
}

function codesReducer(state = {}, action: CodeActionTypes) {
    switch (action.type) {
        case HTML_TYPE:
            return { ...state, html: action.payload }
        case JS_TYPE:
            return { ...state, js: action.payload }
        case CSS_TYPE:
            return { ...state, css: action.payload }
        default:
            return state;
    }
}

const store = createStore(codesReducer, INITIAL_STATE);

export default store;