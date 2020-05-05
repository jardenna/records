import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

   return (

      <nav className="main-nav">

         <Link className="main-nav-items" to="/">Home</Link>
         <Link className="main-nav-items" to="/create">Tilføj album</Link>
         <Link className="main-nav-items" to="/all">Se alle</Link>

      </nav>

   );
}

export default Nav;