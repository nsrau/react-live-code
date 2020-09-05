import React from 'react';
import { useSelector } from 'react-redux';
import { StateReducer } from '../store/types';

const Page: React.FC = () => {
    const codes = useSelector((state: StateReducer) => state);

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: codes.css
                }}
            />
            <div
                dangerouslySetInnerHTML={{
                    __html: codes.html
                }}
            />
            <script>
                {setTimeout(() => {
                    try {
                        window.eval(codes.js)
                    } catch (e) {

                    }
                })}
            </script>
        </>
    )
}

export default Page;
