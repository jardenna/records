import { LOGIN_TYPES } from '@redux/actions/loginActions';

const initialState = {
   isLoading: false,
   login: {},
   error: false
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
            login: action.payload
         };

      case LOGIN_TYPES.LOGIN_FAILURE:
         return {
            ...state,
            isLoading: false,
            login: action.payload
         };

      default:
         return state;
   }
};

export default loginReducer;