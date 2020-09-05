import React from 'react';
import CodeMirrorFC from '../CodeMirror/CodeMirrorFC';
import { useDispatch } from 'react-redux';
import { setJsAction } from '../store/actions';
import { INITIAL_STATE } from '../store';

const JS: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="code js">
            <CodeMirrorFC
                value={INITIAL_STATE.js}
                options={{
                    mode: 'javascript'
                }}
                handlerValue={(js: string) => dispatch(setJsAction(js))}
            />
        </div>
    )
}

export default JS;