import { all, takeLatest, call, put, take } from 'redux-saga/effects';

import api from '@common/api';
import endpoints from '@common/endpoints';

import {
   fetchDetailsFailure,
   recordFetched,
   DETAILS_TYPE
} from '@redux/actions/detailActions';


const fetchDetails = id => {

   const url = `${endpoints.records}${id}`;
   return api('get', url)
      .then(data => data);
};

function* fetchDetailsAsync(id) {
   try {

      const response = yield call(fetchDetails, id);

      yield put(recordFetched(response));
   } catch (error) {
      yield put(fetchDetailsFailure(error));

   }
}

function* details() {

   while (true) {
      const id = yield take(DETAILS_TYPE.FETCH_DETAILS_START);

      yield call(fetchDetailsAsync, id);
   }




}

export function* detailSagas() {
   yield all([call(details)]);

}