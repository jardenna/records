import { combineReducers } from 'redux';


import homeReducer from './reducers/homeRecucer';
import recordsReducer from './reducers/recordsReducer';
import detailReducer from './reducers/detailReducer';

const rootReducer = combineReducers({
   firstSix: homeReducer,
   records: recordsReducer,
   recordDetails: detailReducer


});

export default rootReducer;
