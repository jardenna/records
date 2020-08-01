import endpoints from '@common/endpoints';
import api from '@common/api';


export const LOGIN_TYPES = {
   LOGIN_START: 'LOGIN_START',
   LOGIN_SUCCESS: 'LOGIN_SUCCESS',
   LOGOUT: 'LOGOUT',
   LOGIN_FAILURE: 'LOGIN_FAILURE'
};


const loginStart = () => ({
   type: LOGIN_TYPES.LOGIN_START
});

const loginFailure = error => ({
   type: LOGIN_TYPES.LOGIN_FAILURE,
   payload: error
});

const loggedIn = (user) => {

   return ({
      type: LOGIN_TYPES.LOGIN_SUCCESS,
      payload: user
   });
};

export const logOut = () => {
   return {
      type: LOGIN_TYPES.LOGOUT
   };
};

export const loginSuccess = (user) => {
   const url = endpoints.main + 'user/login';
   return dispatch => {
      dispatch(loginStart());
      api.headers = {
         'Content-Type': 'application/json'
      };

      api('POST', url, user)
         .then(() => dispatch(loggedIn(user)))
         .catch(error => dispatch(loginFailure(error)));
   };

};