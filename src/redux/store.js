import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


