import { USER_TYPES } from '@redux/actions/userActions';


const initialState = {
   isLoading: false,
   user: {},
   error: false

};

const userReducer = (state = initialState, action) => {

   switch (action.type) {
      case USER_TYPES.USER_START:
         return {
            ...state,
            isLoading: true
         };
      case USER_TYPES.USER_SUCCESS:
         return {
            ...state,
            isLoading: false,
            user: action.payload


         };

      case USER_TYPES.USER_FAILURE:

         return {
            ...state,
            isLoading: false,
            error: true
         };

      default: return state;

   }
};

export default userReducer;