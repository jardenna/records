import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const middleware = [thunk, logger, sagaMiddleware];

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


sagaMiddleware.run(rootSaga);
export default store;