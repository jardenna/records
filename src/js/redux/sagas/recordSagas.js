import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '@common/api';
import endpoints from '@common/endpoints';
import {
   ALL_RECORDS_TYPES,
   fetchAllRecordsFailure,
   allRecordsFetched
} from '@redux/actions/recordsActions';

function fetchAllRecords() {
   return api('GET', endpoints.records)
      .then(data => data);
}

function* fetchRecordAsync() {
   try {
      const response = yield call(fetchAllRecords);
      yield put(allRecordsFetched(response));

   } catch (error) {
      yield error => put(fetchAllRecordsFailure(error));
   }
}

function* fetchRecordsStart() {
   yield takeLatest(
      ALL_RECORDS_TYPES.FETCH_ALL_RECORDS_START,
      fetchRecordAsync
   );
}

//Export to rootSagas
export function* recordsSagas() {
   yield all([call(fetchRecordsStart)]);

}