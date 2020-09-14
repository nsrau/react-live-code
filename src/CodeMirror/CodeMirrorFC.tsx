import React, { useRef, useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/meta';
import 'codemirror/addon/selection/active-line';
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/lint/lint';
import './CodeMirrorFC.css';
import './simplescrollbars.css';

const defaultProps = {
    width: '100%',
    height: '100%',
    value: '',
    tabSize: 2,
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    lineNumbers: true,
    styleActiveLine: true,
    styleActiveSelected: true,
    scrollbarStyle: 'simple',
    lint: true,
    theme: 'dracula'
}

interface ICodeMirrorFC {
    value?: string;
    options?: CodeMirror.EditorConfiguration;
    width?: string;
    height?: string;
    handlerValue?: (value: string) => void;
}

const CodeMirrorFC: React.FC<ICodeMirrorFC> = ({
    options,
    value,
    width,
    height,
    handlerValue
}) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const codeMirrorRef = useRef<CodeMirror.EditorFromTextArea | null>(null)

    const setOptions = async (options: any) => {
        if (typeof options === 'object') {
            const mimeType = CodeMirror.findModeByName(options.mode);
            if (mimeType && mimeType.mode) {
                await import(`codemirror/mode/${mimeType.mode}/${mimeType.mode}.js`);
            }
            if (mimeType) {
                options.mode = mimeType.mime;
            }
            Object.keys(options).forEach((name: any) => {
                if (codeMirrorRef.current) {
                    codeMirrorRef.current.setOption(name, options[name])
                }
            });
        }
    }

    useEffect(() => {
        if (textAreaRef.current) {
            codeMirrorRef.current = CodeMirror.fromTextArea(
                textAreaRef.current,
                { ...defaultProps, ...options }
            );

            codeMirrorRef.current.setSize(defaultProps.width || width, defaultProps.height || height);
            codeMirrorRef.current.setValue(value || defaultProps.value);
            codeMirrorRef.current.on('change', () => {
                if (handlerValue && codeMirrorRef.current)
                    handlerValue(codeMirrorRef.current.getValue());
            });
            (async () => {
                await setOptions(options)
            })()
        }
        return () => {
            codeMirrorRef.current?.toTextArea();
        };
    }, [handlerValue, height, options, value, width])


    return (
        <>
            <textarea
                ref={textAreaRef}
            ></textarea>
        </>
    )
}

export default CodeMirrorFC;
