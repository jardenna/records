import { DETAILS_TYPE } from '@redux/actions/detailActions';


const initialState = {
   isLoading: false,
   record: {},
   error: false
};

const detailReducer = (state = initialState, action) => {

   switch (action.type) {
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
