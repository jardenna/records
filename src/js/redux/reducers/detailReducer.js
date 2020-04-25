import { DETAILS_TYPE } from '@redux/actions/detailActions';
import { DELETE_TYPES } from '@redux/actions/deleteActions';

const initialState = {
   isLoading: false,
   record: {},
   error: false
};

const detailReducer = (state = initialState, action) => {

   switch (action.type) {
      case DELETE_TYPES.DELETE_RECORD_SUCCESS:
         console.log(456);
         return state.filter(item => item._id !== action.id);
      case DETAILS_TYPE.FETCH_DETAILS_START:
         return {
            ...state,
            isLoading: true
         };
      case DETAILS_TYPE.FETCH_DETAILS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            record: action.payload
         };

      case DETAILS_TYPE.FETCH_DETAILS_FAILURE:
         return {
            ...state,
            isLoading: false,
            record: {},
            error: true
         };

      default:
         return state;
   }
};

export default detailReducer;
