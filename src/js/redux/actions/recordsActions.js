import api from '@common/api';
import endpoints from '@common/endpoints';

export const ALL_RECORDS_TYPES = {
   FETCH_ALL_RECORDS_START: 'FETCH_ALL_RECORDS_START',
   FETCH_ALL_RECORDS_SUCCESS: 'FETCH_ALL_RECORDS_SUCCESS',
   FETCH_ALL_RECORDS_FAILURE: 'FETCH_ALL_RECORDS_FAILURE'
};



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

const allRecordsFetched = allRecords => ({
   type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_SUCCESS,
   payload: allRecords
});

export const fetchAllRecords = () => {
   return dispatch => {
      dispatch(fetchAllRecordsStart());
      api('get', endpoints.records)
         .then(allRecords => dispatch(allRecordsFetched(allRecords)))
         .catch(
            error => dispatch(fetchAllRecordsFailure(error))
         );
   };
};