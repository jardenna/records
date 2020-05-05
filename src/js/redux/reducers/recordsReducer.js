import { ALL_RECORDS_TYPES } from '@redux/actions/recordsActions';
import { DELETE_TYPES } from '@redux/actions/deleteActions';

const initialState = {
   isLoading: false,
   allRecords: [],
   error: false
};

const recordsReducer = (state = initialState, action) => {
   switch (action.type) {
      case DELETE_TYPES.DELETE_RECORD_SUCCESS:

         return ({
            ...state,
            allRecords: state.allRecords.filter(record => record._id !== action.payload)
         });
      case ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_START:
         return ({
            ...state,
            isLoading: true
         });
      case ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_SUCCESS:
         return ({
            ...state,
            isLoading: false,
            allRecords: action.payload
         });

      case ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_FAILURE:
         return ({
            ...state,
            isLoading: false,
            error: true
         });
      case ALL_RECORDS_TYPES.DELETE_RECORDS_FAILURE:
         return ({
            ...state,
            error: action.payload
         });
      case ALL_RECORDS_TYPES.DELETE_RECORDS_SUCCESS:
         return ({
            ...state,
            id: action.payload
         });

      default: return state;
   }
};

export default recordsReducer;