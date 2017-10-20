import {call, put, takeLatest} from 'redux-saga/effects';
import {ProductActions} from './productActions';
import {Api} from './api';

function *loadProducts() {
    try {
        const products = yield call(new Api().getProducts);
        console.log(products)
        yield put({
            type: ProductActions.ProductsLoadCompleted,
            payload: products
        });
    } catch (e) {
        yield put({
            type: ProductActions.ProductsLoadFailed,
            error: e.message
        });
    }
}

export function *loadProductsSaga() {
    yield takeLatest(ProductActions.ProductsLoadStarted, loadProducts);
}

