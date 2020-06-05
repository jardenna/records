import { FETCH_FIRST_SIX } from '@redux/actions/homeActions';

const initialState = {
   isLoading: false,
   firstSix: [],
   error: false

};

const homeReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_FIRST_SIX.FETCH_RECORDS_START:
         return {
            ...state,
            isLoading: true
         };
      case FETCH_FIRST_SIX.FETCH_RECORDS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            firstSix: action.payload
         };

      case FETCH_FIRST_SIX.FETCH_RECORDS_FAILURE:
         console.log(145);
         return {
            ...state,
            isLoading: false,
            error: true
         };

      default: return state;

   }
};

export default homeReducer;