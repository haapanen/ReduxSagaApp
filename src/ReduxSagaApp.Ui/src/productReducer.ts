import {ProductAction, ProductActions} from './productActions';

export interface ProductReducerState {

}

const defaultState: ProductReducerState = {};

export function productReducer(state: ProductReducerState = defaultState, action: ProductAction): ProductReducerState {
    switch (action.type) {
        case ProductActions.ProductsLoadStarted:
        case ProductActions.ProductsLoadCompleted:
        case ProductActions.ProductsLoadFailed:
        default:
            return state;
    }
}