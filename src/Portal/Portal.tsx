import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const Portal: React.FC = ({ children, ...props }) => {
    const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null)
    const mountNode = contentRef && contentRef.contentWindow && contentRef.contentWindow.document.body
    
    return (
        <iframe {...props} title="portal" ref={setContentRef}>
            {mountNode &&
                createPortal(
                    children,
                    mountNode
                )}
        </iframe>
    )
}

export default Portal;