import { HTML_TYPE, JS_TYPE, CSS_TYPE } from "./types";

export function setHtmlAction(value: string) {
    return {
        type: HTML_TYPE,
        payload: value
    }
}

export function setJsAction(value: string) {
    return {
        type: JS_TYPE,
        payload: value
    }
}

export function setCssAction(value: string) {
    return {
        type: CSS_TYPE,
        payload: value
    }
}