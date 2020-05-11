export const Types = {
   GET_USERS_REQUEST: 'GET_USERS_REQUEST',
   CREATE_USERS_REQUEST: 'CREATE_USERS_REQUEST',
   GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
   DELETE_USERS_REQUEST: 'DELETE_USERS_REQUEST'
};

export const getUsersRequest = () => ({
   type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
   type: Types.GET_USERS_SUCCESS,
   payload: {
      items
   }
});

export const createUsersRequest = ({ firstName, lastName }) => ({
   type: Types.CREATE_USERS_REQUEST,
   payload: {
      firstName,
      lastName
   }
});

export const deleteUserRequest = (userId) => ({
   type: Types.DELETE_USERS_REQUEST,
   payload: userId
});