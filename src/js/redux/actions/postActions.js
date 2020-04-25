
import api from '@common/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const NEW_POST = 'NEW_POST';

const fetchPostsStart = () => {
   return ({
      type: FETCH_POSTS
   });
};

const fetchPostsFailure = (error) => {
   return ({
      type: FETCH_POSTS_FAILURE,
      payload: error
   });
};



export const fetchPosts = () => {
   return (
      dispatch => {
         dispatch(fetchPostsStart());
         api('get', 'https://jsonplaceholder.typicode.com/posts')
            .then(posts =>
               dispatch({
                  type: FETCH_POSTS_SUCCESS,
                  payload: posts
               })
            ).catch(
               error => dispatch(fetchPostsFailure(error.message))
            );
      }
   );
};

export const createPost = postData => dispatch => {
   api('post', 'https://jsonplaceholder.typicode.com/posts', postData)
      .then(res => res.json())
      .then(post =>
         dispatch({
            type: NEW_POST,
            payload: post
         })
      );
};
