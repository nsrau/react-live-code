import React from 'react';
import CodeMirrorFC from '../CodeMirror/CodeMirrorFC';
import { useDispatch } from 'react-redux';
import { setCssAction } from '../store/actions';
import { INITIAL_STATE } from '../store';

const CSS: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="code css">
            <CodeMirrorFC
                value={INITIAL_STATE.css}
                options={{
                    mode: 'css'
                }}
                handlerValue={(css: string) => dispatch(setCssAction(css))}
            />
        </div>
    )
}

export default CSS;