import api from '@common/api';

const baseUrl = 'http://rem-rest-api.herokuapp.com/api/users/';


export const getUsers = () => {

   return api('get', baseUrl)
      .then(data => data);
};

export const createUsers = ({ firstName, lastName }) => {

   return api('post', baseUrl, { firstName, lastName })
      .then(items => items[{ firstName, lastName }]);
};

export const deleteUser = (userId) => {
   const path = baseUrl + userId;
   fetch(path, {
      method: 'delete',
      headers: {
         'Content-Type': 'application/json'
      }
   });
};