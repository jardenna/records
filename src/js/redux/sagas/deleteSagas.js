import { all, take, call } from 'redux-saga/effects';
import endpoints from '@common/endpoints';
import { ALL_RECORDS_TYPES } from '@redux/actions/recordsActions';

import api from '@common/api';

const deleteApi = id => {
   const url = endpoints.records;
   const path = url + 'delete/' + id;
   api('delete', path);
};
function* deleteRecord(id) {
   yield call(deleteApi, id);
}

function* recordsDeleted() {
   while (true) {
      const action = yield take(ALL_RECORDS_TYPES.DELETE_RECORD_SUCCESS);
      yield call(deleteRecord, action.payload);
   }
}

export function* deleteSagas() {
   yield all([call(recordsDeleted)]);

}