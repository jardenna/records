
import { CHANGE_PARENT_ALLELE } from '@redux/actions/selectActions';
const initialState = {
   byId: {
      parent1: {
         allele1: undefined,
         allele2: undefined
      },
      parent2: {
         allele1: undefined,
         allele2: undefined
      }
   },
   allIds: ['parent1', 'parent2']
};

function selectReducer(state = initialState, action) {

   switch (action.type) {
      case CHANGE_PARENT_ALLELE:

         return {
            ...state,
            byId: {
               ...state.byId,
               [action.data.parentId]: {
                  ...state.byId[action.data.parentId],
                  [action.data.alleleId]: action.data.allele
               }
            }
         };

      default:
         return state;
   }
}



export default selectReducer;