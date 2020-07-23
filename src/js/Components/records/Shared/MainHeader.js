import React from 'react';
import { Link } from 'react-router-dom';

import hero from '@images/hero.jpg';

function MainHeader() {
    return (
        <header className="main-header" style={{
            backgroundImage: `url(${hero})`
        }}>
            <div className="main-wrapper">
                <h1><Link to='/'>Pladesamling</Link></h1>
            </div>

        </header>
    );
}

export default MainHeader;