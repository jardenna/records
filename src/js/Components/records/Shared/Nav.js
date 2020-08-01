import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '@common/constants/nav';
import MenuBurger from '@commonReact/MenuBurger';
import { Switch, Route } from 'react-router-dom';
import useToggle from '@hooks/useToggle';
import useScroll from '@hooks/useScroll';

function Nav() {
   const ref = React.useRef(null);

   const [toggle, selected] = useToggle([]);
   const [isSticky] = useScroll(ref);

   const history = useHistory();
   const pathname = history.location.pathname;

   const onToggleNav = (value) => {
      toggle(value);

   };

   return (
      <div className={`${!selected.includes('mobile') ? '' : 'open-nav'} ${isSticky ? 'sticky' : ''} main-nav`} ref={ref}>

         <MenuBurger
            onClick={() => onToggleNav('mobile')}
         />

         <nav className='main-nav'>

            <section className="main-wrapper">
               <ul>
                  {routes.map(route => (
                     route.link ? <li className={`${pathname === route.path ? 'active' : ''} main-nav-items`} key={route.path} id={route.path} onClick={() => onToggleNav('mobile', route.path)}>
                        <Link to={route.path}>{route.link}</Link>
                     </li> : null
                  ))}
               </ul>
            </section>
            <div className={`main-wrapper main-headline ${isSticky ? 'sticky' : ''} `} ref={ref}>
               <Switch>
                  {routes.map(route => {
                     return (
                        <Route key={route.path} exact={route.exact} path={route.path} component={route.sideBar} />
                     );
                  }

                  )}
               </Switch>
            </div>
         </nav>

      </div>

   );
}

export default Nav;