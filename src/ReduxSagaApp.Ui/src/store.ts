import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {productReducer, ProductReducerState} from './productReducer';
// import {DevTools} from './tools/DevTools';
import createSagaMiddleware from "redux-saga";
import {createProductsSaga, loadProductsSaga} from './productSagas';

export interface AppState {
    productReducer: ProductReducerState
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(combineReducers({
    productReducer
// }), {}, compose(applyMiddleware(sagaMiddleware), (DevTools as any).instrument()));
}), {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(loadProductsSaga);
sagaMiddleware.run(createProductsSaga);