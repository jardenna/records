import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '@common/api';
import endpoints from '@common/endpoints';

import {
   fetchFirstSixFailure,
   firstSixFetched,
   FETCH_FIRST_SIX
} from '@redux/actions/homeActions';


function fetchFirstSix() {
   return api('get', endpoints.main)
      .then(data => data);
}

function* fetchFirstSixAsync() {

   try {
      const response = yield call(fetchFirstSix);
      yield put(firstSixFetched(response));
   } catch (error) {
      yield error => put(fetchFirstSixFailure(error));
   }
}

function* firstSix() {
   yield takeLatest(
      FETCH_FIRST_SIX.FETCH_RECORDS_START,
      fetchFirstSixAsync
   );
}

export function* firstSixSagas() {
   yield all([call(firstSix)]);

}