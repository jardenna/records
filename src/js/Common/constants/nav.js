import Home from '@components/records/Home';
import Login from '@components/Login';
import RecordTable from '@components/records/RecordTable';

import Protected from '@components/records/Protected';
import Details from '@components/records/Details';
import Update from '@components/records/Update';
import Register from '@components/records/Register';

import { NAV } from '@common/constants/content';

const { home, create, all, details, addAlbum, login, register } = NAV;

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
   },
   {
      path: '/register',
      main: Register,
      sideBar: () => register
   },
   {
      path: '/protected',
      main: Protected,
      link: 'protected',
      sideBar: () => 'protected'
   }

];