import { CREATE_TYPES } from '@redux/actions/createActions';

const initialState = {
   isLoading: false,
   error: false,
   file: '',
   fileName: '',
   record: {}
};
const createReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_TYPES.CREATE_RECORD_START:
         return {
            ...state,
            isLoading: true
         };
      case CREATE_TYPES.CREATE_RECORD_SUCCESS:
         return {
            ...state,
            record: action.payload,
            file: action.file,
            fileName: action.fileName
         };

      case CREATE_TYPES.CREATE_RECORD_FAILURE:
         return {
            ...state,
            error: true
         };

      default: return state;
   }
};

export default createReducer;