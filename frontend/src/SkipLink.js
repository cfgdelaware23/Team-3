import React from 'react';

const SkipLink = ({ children = "Skip to main content" }) => {
    const skipToContent = (e) => {
        e.preventDefault();
        //Focus is going to the first button for the organization cards
        const targetElement = document.querySelector(".main-button-for-events");
        if (targetElement) {
            targetElement.focus();
        }
    };
    return (
        <a href="#" className="skip-link" onClick={skipToContent}>
            {children}
        </a>
    );
};

export default SkipLink;
