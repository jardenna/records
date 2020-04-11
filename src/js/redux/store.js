// import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';

// import rootReducer from './rootReducer';
// import rootSaga from '@redux/rootSaga';

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware, logger];

// const composeEnhancers =
//    process.env.NODE_ENV === 'development'
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//       : compose;

// const store = createStore(
//    rootReducer,
//    composeEnhancers(
//       applyMiddleware(...middleware)
//    )
// );

// sagaMiddleware.run(rootSaga);


// export default store;

