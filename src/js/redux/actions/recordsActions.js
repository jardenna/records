export const ALL_RECORDS_TYPES = {
   FETCH_ALL_RECORDS_START: 'FETCH_ALL_RECORDS_START',
   FETCH_ALL_RECORDS_SUCCESS: 'FETCH_ALL_RECORDS_SUCCESS',
   FETCH_ALL_RECORDS_FAILURE: 'FETCH_ALL_RECORDS_FAILURE',
   DELETE_RECORD_SUCCESS: 'DELETE_RECORD_SUCCESS'
};

//Export to component get all
export const fetchAllRecordsStart = () => ({
   type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_START
});

//Export to component Delete record 
export const recordDeleted = (id) => ({
   type: ALL_RECORDS_TYPES.DELETE_RECORD_SUCCESS,
   payload: id
});

//Export to RecordSagas
export const fetchAllRecordsFailure = error => ({
   type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_FAILURE,
   payload: error
});

//Export to RecordSagas
export const allRecordsFetched = allRecords => ({
   type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_SUCCESS,
   payload: allRecords
});

