

import Home from '@components/records/Home';
import Login from '@components/Login';
//import Selectbox from '@components/Selectbox';
//import Table from '@components/Table/Table';
import RecordTable from '@components/records/RecordTable';
import Details from '@components/records/Details';
import Update from '@components/records/Update';

const NAV = {
   home: 'Home',
   create: 'Tilføj album',
   all: 'Se alle album',
   details: 'Detaljer',
   addAlbum: 'Tilføj album',
   login: 'Log ind'
};

const { home, create, all, details, addAlbum, login } = NAV;

export const routes = [
   {
      path: '/',
      main: Home,
      sideBar: () => home,
      link: home,
      exact: true
   },
   {
      path: '/create',
      main: Update,
      link: create,
      sideBar: () => create
   },
   {
      path: '/all',
      main: RecordTable,
      link: all,
      sideBar: () => all
   },
   {
      path: '/details/:id',
      main: Details,
      sideBar: () => details
   },
   {
      path: '/update/:id',
      main: Update,
      sideBar: () => addAlbum
   },
   {
      path: '/login',
      main: Login,
      link: login,
      sideBar: () => login
   }

];
{/* <Route path='/table' component={Table} />
<Route path='/select' component={Selectbox} /> 

<Link className="main-nav-items" to="/table">Table</Link>

<Link className="main-nav-items" to="/select">select</Link> 
*/}