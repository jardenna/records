import React from 'react';
import hero from '@images/hero.jpg';

function MainHeader() {
    return (
        <header className="main-header" style={{
            backgroundImage: `url(${hero})`
        }}>
            <div className="container">
                Steens <h2>Pladesamling</h2>
            </div>

        </header>
    );
}



export default MainHeader;