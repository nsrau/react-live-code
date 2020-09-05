export const HTML_TYPE = 'HTML_TYPE'
export const JS_TYPE = 'JS_TYPE'
export const CSS_TYPE = 'CSS_TYPE'

export interface StateReducer {
    html: string;
    js: string;
    css: string;
}

export interface SetHTMLAction {
    type: typeof HTML_TYPE;
    payload: string;
}

export interface SetJSAction {
    type: typeof JS_TYPE;
    payload: string;
}

export interface SetCSSAction {
    type: typeof CSS_TYPE;
    payload: string;
}

export type CodeActionTypes = SetHTMLAction | SetJSAction | SetCSSAction;
