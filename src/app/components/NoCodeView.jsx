'use client'
import React, { useEffect } from 'react';

const NoCodeView = ({ children }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey) {
                event.preventDefault();
            }
            if (event.keyCode === 123) { // F12 key
                event.preventDefault();
            }
        };

        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.addEventListener('contextmenu', handleContextMenu);

        // Cleanup the event listeners on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default NoCodeView;
