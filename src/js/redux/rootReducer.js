import { combineReducers } from 'redux';


import homeReducer from './reducers/homeRecucer';
import recordsReducer from './reducers/recordsReducer';
import detailReducer from './reducers/detailReducer';
import updateReducer from './reducers/updateReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
   firstSix: homeReducer,
   records: recordsReducer,
   recordDetails: detailReducer,
   update: updateReducer,
   login: loginReducer

});

export default rootReducer;
