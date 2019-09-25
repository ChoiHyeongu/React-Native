import React from 'react';
import './Palette.css';

function Palette() {
    return(
        <section className="palette-wrapper">
            <div className="palette">
                <div className="color active" backgorund="white"></div>
            </div>
        </section>
    );
};

export default Palette;