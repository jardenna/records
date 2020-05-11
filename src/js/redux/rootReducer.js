import { combineReducers } from 'redux';


import homeReducer from './reducers/homeRecucer';
import recordsReducer from './reducers/recordsReducer';
import detailReducer from './reducers/detailReducer';
import createReducer from './reducers/createReducer';
import updateReducer from './reducers/updateReducer';
import userReducer from './reducers/userReducer';



const rootReducer = combineReducers({
   firstSix: homeReducer,
   records: recordsReducer,
   recordDetails: detailReducer,
   create: createReducer,
   update: updateReducer,
   users: userReducer

});

export default rootReducer;
