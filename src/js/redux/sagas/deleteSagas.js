import { all, take, call } from 'redux-saga/effects';
import endpoints from '@common/endpoints';
import { ALL_RECORDS_TYPES } from '@redux/actions/recordsActions';

const deleteApi = id => {
   const url = endpoints.records;
   const path = url + 'delete/' + id;
   return (
      fetch(path, {
         method: 'delete',
         headers: {
            'Content-Type': 'application/json'
         }
      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
   );
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