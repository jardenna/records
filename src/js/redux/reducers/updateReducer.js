import { UPDATE_TYPES } from '@redux/actions/updateActions';


const initialState = {
   isLoading: false,
   record: {},
   error: false,
   image: ''
};

const updateReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_TYPES.UPDATE_RECORD_START:
         return {
            ...state,
            isLoading: true
         };
      case UPDATE_TYPES.UPDATE_RECORD_SUCCESS:
         return {
            ...state,
            isLoading: false,
            record: action.payload,
            id: action.id,
            image: action.image
         };

      case UPDATE_TYPES.UPDATE_RECORD_FAILURE:

         return {
            ...state,
            isLoading: false,
            error: true
         };

      default: return state;

   }
};

export default updateReducer;