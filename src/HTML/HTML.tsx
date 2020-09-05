import React from 'react';
import CodeMirrorFC from '../CodeMirror/CodeMirrorFC';
import { useDispatch } from 'react-redux';
import { setHtmlAction } from '../store/actions';
import { INITIAL_STATE } from '../store';

const HTML: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="code html">
            <CodeMirrorFC
                value={INITIAL_STATE.html}
                options={{
                    mode: 'xml'
                }}
                handlerValue={(html) => dispatch(setHtmlAction(html))}
            />
        </div>
    )
}

export default HTML;