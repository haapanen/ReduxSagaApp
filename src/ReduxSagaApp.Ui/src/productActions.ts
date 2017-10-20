import {Action} from 'redux';

export enum ProductActions {
    ProductsLoadStarted = "PRODUCTS_LOAD_STARTED",
    ProductsLoadCompleted = "PRODUCTS_LOAD_COMPLETED",
    ProductsLoadFailed = "PRODUCTS_LOAD_FAILED",
}

export type ProductAction =
    | ProductsLoadStarted
    | ProductsLoadCompleted
    | ProductsLoadFailed
;

export interface ProductsLoadStarted extends Action {
    type: ProductActions.ProductsLoadStarted;
}
export interface ProductsLoadCompleted extends Action {
    type: ProductActions.ProductsLoadCompleted;
}
export interface ProductsLoadFailed extends Action {
    type: ProductActions.ProductsLoadFailed;
}