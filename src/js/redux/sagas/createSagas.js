import { all, takeLatest, call, put } from 'redux-saga/effects';

import endpoints from '@common/endpoints';

import {
   createRecordFailure,
   createStart,
   CREATE_TYPES
} from '@redux/actions/createActions';



const createRecordApi = (record, fileName, file, id, imgUpdated) => {

   const fd = new FormData();

   for (let key in record) {
      fd.append(key, record[key]);
   }
   fd.append(fileName, file);

   if (id) {
      const url = endpoints.records;
      const path = url + id;
      fetch(path, {
         method: 'PUT',
         body: JSON.stringify(record),
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(res => res.ok ? res.json() : Promise.reject(res))
         .then(record => record);
      if (imgUpdated) {
         const fdata = new FormData();


         fdata.append(fileName, file);
         return () => {

            fetch(path, {
               method: 'POST',
               body: fdata
            })
               .then(res => res.ok ? res.json() : Promise.reject(res));
         };
      }
   } else {
      fetch(endpoints.records, {
         method: 'POST',
         body: fd

      })
         .then(res => res.ok ? res.json() : Promise.reject(res))
         .then(record => record);
   }

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