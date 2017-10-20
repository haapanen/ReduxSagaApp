import {call, put, takeLatest} from 'redux-saga/effects';
import {ProductActions} from './productActions';
import {Api} from './api';
import {normalize} from 'normalizr';
import {productArray} from './schema';

function *loadProducts() {
    try {
        const normalized = normalize(yield call(new Api().getProducts), productArray);

        yield put({
            type: ProductActions.ProductsLoadCompleted,
            payload: normalized
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

