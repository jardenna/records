export const ALL_RECORDS_TYPES = {
   FETCH_ALL_RECORDS_START: 'FETCH_ALL_RECORDS_START',
   FETCH_ALL_RECORDS_SUCCESS: 'FETCH_ALL_RECORDS_SUCCESS',
   FETCH_ALL_RECORDS_FAILURE: 'FETCH_ALL_RECORDS_FAILURE'
};

//Export to component
export const fetchAllRecordsStart = () => ({
   type: ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_START
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

