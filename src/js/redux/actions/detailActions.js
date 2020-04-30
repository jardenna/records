import api from '@common/api';
import endpoints from '@common/endpoints';

export const DETAILS_TYPE = {
   FETCH_DETAILS_START: 'FETCH_DETAILS_START',
   FETCH_DETAILS_SUCCESS: 'FETCH_DETAILS_SUCCESS',
   FETCH_DETAILS_FAILURE: 'FETCH_DETAILS_FAILURE'
};


const fetchDetailsStart = () => ({
   type: DETAILS_TYPE.FETCH_DETAILS_START
});


const fetchDetailsFailure = (error) => ({
   type: DETAILS_TYPE.FETCH_DETAILS_FAILURE,
   payload: error
});

const recordFetched = record => {
   return {
      type: DETAILS_TYPE.FETCH_DETAILS_SUCCESS,
      payload: record
   };
};

export const fetchDetails = id => {

   return dispatch => {
      dispatch(fetchDetailsStart());
      const url = `${endpoints.records}${id}`;

      api('get', url)
         .then(record => dispatch(recordFetched(record)))
         .catch(error => dispatch(fetchDetailsFailure(error)));
   };
};