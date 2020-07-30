import { all, takeLatest, call, put } from 'redux-saga/effects';

import endpoints from '@common/endpoints';
import imgApi from '@common/imgApi';

import {
   createRecordFailure,
   createStart,
   CREATE_TYPES
} from '@redux/actions/createActions';



const createRecordApi = (record, fileName, file) => {

   const fd = new FormData();

   for (let key in record) {
      fd.append(key, record[key]);
   }
   fd.append(fileName, file);
   const url = endpoints.records;

   imgApi('post', url, fd)
      .then(record => record);


};

//Worker
function* createRecord(action) {
   try {

      yield put(createStart);

      yield call(createRecordApi, action.payload, action.fileName, action.file, action.id, action.imgUpdated);

   } catch (error) {

      yield put(createRecordFailure(error));
   }
   yield;
}

function* watchCreateRequest() {
   yield takeLatest(CREATE_TYPES.CREATE_USER_REQUEST, createRecord);
}


export function* createSagas() {

   yield all([
      call(watchCreateRequest)
   ]);

}