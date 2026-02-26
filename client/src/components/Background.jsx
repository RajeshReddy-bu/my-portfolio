import React, { useEffect } from 'react';

const Background = () => {
    useEffect(() => {
        const cursorGlow = document.getElementById('cursorGlow');
        const handleMouseMove = (e) => {
            if (cursorGlow) {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="background-animation">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="cursor-glow" id="cursorGlow"></div>
        </>
    );
};

export default Background;
