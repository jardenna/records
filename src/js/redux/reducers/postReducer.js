import { FETCH_POSTS, NEW_POST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../actions/postActions';

const initialState = {
   isLoading: false,
   error: false,
   items: [],
   item: {}
};

export default function (state = initialState, action) {
   switch (action.type) {
      case FETCH_POSTS:
         return {
            ...state,
            isLoading: true
         };
      case FETCH_POSTS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            items: action.payload
         };

      case FETCH_POSTS_FAILURE:
         return {
            ...state,
            isLoading: false,
            items: [],
            error: true
         };
      case NEW_POST:
         return {
            ...state,
            item: action.payload
         };
      default:
         return state;
   }
}