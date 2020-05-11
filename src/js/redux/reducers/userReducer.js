import { Types } from '@redux/actions/userActions';

const INITIAL_STATE = {
   items: []
};

function userReducer(state = INITIAL_STATE, action) {
   switch (action.type) {
      case Types.GET_USERS_SUCCESS:

         return ({
            ...state,
            items: action.payload.items
         });

      default: return state;
   }
}


export default userReducer;