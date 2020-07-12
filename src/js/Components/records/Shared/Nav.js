import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

   return (
      <nav className="main-nav">
         <span className="mobile-button" />
         <div className="main-wrapper">
            <Link className="main-nav-items" to="/">Home</Link>
            <Link className="main-nav-items" to="/create">Tilføj album</Link>
            <Link className="main-nav-items" to="/all">Se alle</Link>
            <Link className="main-nav-items" to="/table">Table</Link>
            <Link className="main-nav-items" to="/login">login</Link>
            <Link className="main-nav-items" to="/select">select</Link>
         </div>
      </nav>
   );
}

export default Nav;