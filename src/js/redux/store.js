import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import rootReducer from './rootReducer';

const middleware = [thunk, logger];

const composeEnhancers =
   process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

const store = createStore(
   rootReducer,
   composeEnhancers(
      applyMiddleware(...middleware)
   )
);



export default store;