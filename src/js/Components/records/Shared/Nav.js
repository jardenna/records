import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@common/constants/nav';
import { Switch, Route } from 'react-router-dom';
function Nav() {

   return (
      <div>
         <nav className="main-nav">
            <span className="mobile-button" />
            <section className="main-wrapper">
               <ul>
                  {routes.map(route => (
                     route.link ? <li className="main-nav-items" key={route.path}>
                        <Link to={route.path}>{route.link}</Link>
                     </li> : null
                  ))}
               </ul>
            </section>

         </nav>
         <section className="main-wrapper main-headline">
            <Switch>
               {routes.map(route => {

                  return (
                     <Route key={route.path} exact={route.exact} path={route.path} component={route.sideBar} />
                  );
               }

               )}
            </Switch>
         </section>
      </div>

   );
}

export default Nav;