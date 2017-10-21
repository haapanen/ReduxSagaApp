import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {ProductActions, ProductsCreateStarted} from './productActions';
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

function *createProduct(action: ProductsCreateStarted) {
    try {
        if (!action.product) {
            return yield put({
                type: ProductActions.ProductsCreateFailed,
                error: "missing product"
            });
        }

        const payload = yield call(new Api().createProduct, action.product);

        yield put({
            type: ProductActions.ProductsCreateCompleted,
            payload: payload
        });
    } catch (e) {
        yield put({
            type: ProductActions.ProductsCreateFailed,
            error: e.message
        });
    }
}

export function *createProductsSaga() {
    yield takeEvery(ProductActions.ProductsCreateStarted, createProduct)
}
