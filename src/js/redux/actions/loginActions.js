import endpoints from '@common/endpoints';

export const LOGIN_TYPES = {
   LOGIN_START: 'LOGIN_START',
   LOGIN_SUCCESS: 'LOGIN_SUCCESS',
   LOGIN_FAILURE: 'LOGIN_FAILURE'

};

const loginStart = () => ({
   type: LOGIN_TYPES.LOGIN_START
});

const loginFailure = error => ({
   type: LOGIN_TYPES.LOGIN_FAILURE,
   payload: error
});


export const loginSuccess = ({ email, password }) => ({
   type: LOGIN_TYPES.LOGIN_SUCCESS,
   payload: { email, password }
});