import { LOGIN_TYPES } from '@redux/actions/loginActions';

const initialState = {
   isLoading: false,
   user: {},
   error: false,
   loggedIn: false
};

const loginReducer = (state = initialState, action) => {

   switch (action.type) {
      case LOGIN_TYPES.LOGIN_START:
         return {
            ...state,
            isLoading: true
         };
      case LOGIN_TYPES.LOGIN_SUCCESS:
         return {
            ...state,
            isLoading: false,
            user: action.payload,
            loggedIn: true
         };

      case LOGIN_TYPES.LOGOUT:
         return {
            ...state,
            user: {},
            loggedIn: false
         };

      case LOGIN_TYPES.LOGIN_FAILURE:

         return {
            ...state,
            isLoading: false,
            error: true,
            loggedIn: false
         };

      default: return state;

   }
};

export default loginReducer;