import { UPDATE_TYPES } from '@redux/actions/updateActions';


const initialState = {
   isLoading: false,
   record: {},
   error: false
};

const updateReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_TYPES.UPDATE_RECORD_START:
         return {
            ...state,
            isLoading: true
         };
      case UPDATE_TYPES.UPDATE_RECORD_SUCCES:

         return {
            ...state,
            isLoading: false,
            record: action.payload,
            id: action.id
         };

      case UPDATE_TYPES.UPDATE_RECORD_FAILURE:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         };

      default: return state;

   }
};

export default updateReducer;