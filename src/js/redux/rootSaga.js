import { all, call } from 'redux-saga/effects';
import { recordsSagas } from '@redux/sagas/recordSagas';
import { firstSixSagas } from '@redux/sagas/homeSagas';
import { detailSagas } from './sagas/datailSagas';
import { createSagas } from '@redux/sagas/createSagas';
import { deleteSagas } from '@redux/sagas/deleteSagas';



function* rootSaga() {
   yield all([
      call(recordsSagas),
      call(firstSixSagas),
      call(detailSagas),
      call(createSagas),
      call(deleteSagas)
   ]);
}


export default rootSaga;