import React from 'react';
import hero from '@images/hero.jpg';

function MainHeader() {
    return (
        <header className="main-header" style={{
            backgroundImage: `url(${hero})`
        }}>
            <div className="container">
                <h1>Pladesamling</h1>
            </div>

        </header>
    );
}



export default MainHeader;