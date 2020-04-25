import api from '@common/api';
import endpoints from '@common/endpoints';

export const FETCH_RECORDS_START = 'FETCH_RECORDS_START';
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS';
export const FETCH_RECORDS_FAILURE = 'FETCH_RECORDS_FAILURE';




const fetchFirstSixStart = () => {
   return ({
      type: FETCH_RECORDS_START
   });
};

const fetchFirstSixFailure = (error) => {
   return ({
      type: FETCH_RECORDS_FAILURE,
      payload: error
   });
};

export const fetchFirstSixSuccess = () => {
   return (
      dispatch => {
         dispatch(fetchFirstSixStart());
         api('get', endpoints.main)
            .then(firstSix =>
               dispatch({
                  type: FETCH_RECORDS_SUCCESS,
                  payload: firstSix

               })
            )
            .catch(
               error => dispatch(fetchFirstSixFailure(error.message))
            );
      }

   );
};
