import {
   FETCH_RECORDS_START,
   FETCH_RECORDS_SUCCESS,
   FETCH_RECORDS_FAILURE
} from '@redux/actions/homeActions';

const initialState = {
   isLoading: false,
   firstSix: [],
   error: false

};

const homeReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_RECORDS_START:
         return {
            ...state,
            isLoading: true
         };
      case FETCH_RECORDS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            firstSix: action.payload
         };

      case FETCH_RECORDS_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: true
         };

      default: return state;

   }
};

export default homeReducer;