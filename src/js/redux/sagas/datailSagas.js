import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '@common/api';
import endpoints from '@common/endpoints';

import {
   fetchDetailsFailure,
   recordFetched,
   DETAILS_TYPE
} from '@redux/actions/detailActions';

//API Call
const detailsApi = id => {
   const url = `${endpoints.records}${id}`;
   return api('get', url)
      .then(data => data);
};

//Worker
function* fetchDetailsWorker(action) {
   try {
      const response = yield call(detailsApi, action.payload);
      yield put(recordFetched(response));
   } catch (error) {
      yield put(fetchDetailsFailure(error));
   }

}

//Watcher
function* watchCreateUserRequest() {
   yield takeLatest(DETAILS_TYPE.FETCH_DETAILS_START, fetchDetailsWorker);
}

export function* detailSagas() {
   yield all([
      call(watchCreateUserRequest)
   ]);

}