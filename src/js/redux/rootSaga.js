import { all, call } from 'redux-saga/effects';
import { recordsSagas } from '@redux/sagas/recordSagas';
import { firstSixSagas } from '@redux/sagas/homeSagas';
//import { detailSagas } from '@redux/sagas/datailSagas';


function* rootSaga() {
   yield all([
      call(recordsSagas),
      call(firstSixSagas)
   ]);
}

export default rootSaga;