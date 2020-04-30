import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

   return (
      <nav >
         <ul className="main-nav">
            <li><Link className="main-nav-items" to="/">Home</Link></li>
            <li> <Link className="main-nav-items" to="/games">Games</Link></li>
            <li><Link className="main-nav-items" to="/games/new">Add game</Link></li>
         </ul>




      </nav>

   );
}

export default Nav;