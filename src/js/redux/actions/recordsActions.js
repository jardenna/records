import api from '@common/api';
import endpoints from '@common/endpoints';

export const ALL_RECORDS_TYPES = {
   FETCH_ALL_RECORDS_START: 'FETCH_ALL_RECORDS_START',
   FETCH_ALL_RECORDS_SUCCESS: 'FETCH_ALL_RECORDS_SUCCESS',
   FETCH_ALL_RECORDS_FAILURE: 'FETCH_ALL_RECORDS_FAILURE'
};

export function deleteSetSuccess(id) {
   return {
      type: 'DELETE_RECORDS_SUCCESS',
      payload: id

   };
}
export function deleteSet(id) {
   return (dispatch) => {
      const url = endpoints.records;
      const path = url + 'delete/' + id;
      fetch(path, {
         method: 'DELETE'

      }).then(response => response)
         .then(id => dispatch(deleteSetSuccess(id)));
   };
}

const fetchAllRecordsStart = () => {
   return ({
      type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_START
   });
};

const fetchAllRecordsFailure = (error) => {
   return ({
      type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_FAILURE,
      payload: error
   });
};




export const fetchAllRecords = () => {
   return dispatch => {
      dispatch(fetchAllRecordsStart);
      api('get', endpoints.records)
         .then(allRecords => dispatch({
            type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_SUCCESS,
            payload: allRecords
         }))
         .catch(
            error => dispatch(fetchAllRecordsFailure(error.message))
         );
   };
};