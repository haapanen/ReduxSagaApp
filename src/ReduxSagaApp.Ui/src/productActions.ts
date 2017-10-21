import {Action} from 'redux';
import {Product} from './product';

export enum ProductActions {
    ProductsLoadStarted = "PRODUCTS_LOAD_STARTED",
    ProductsLoadCompleted = "PRODUCTS_LOAD_COMPLETED",
    ProductsLoadFailed = "PRODUCTS_LOAD_FAILED",
    ProductsCreateStarted = "PRODUCTS_CREATE_STARTED",
    ProductsCreateCompleted = "PRODUCTS_CREATE_COMPLETED",
    ProductsCreateFailed = "PRODUCTS_CREATE_FAILED",
}

export type ProductAction =
    | ProductsLoadStarted
    | ProductsLoadCompleted
    | ProductsLoadFailed
    | ProductsCreateStarted
    | ProductsCreateCompleted
    | ProductsCreateFailed
;

export interface ProductsLoadStarted extends Action {
    type: ProductActions.ProductsLoadStarted;
}
export interface ProductsLoadCompleted extends Action {
    type: ProductActions.ProductsLoadCompleted;
    payload: {
        entities: any,
        result: any
    };
}
export interface ProductsLoadFailed extends Action {
    type: ProductActions.ProductsLoadFailed;
}


export interface ProductsCreateStarted extends Action {
    type: ProductActions.ProductsCreateStarted;
    product: Product;
}
export interface ProductsCreateCompleted extends Action {
    type: ProductActions.ProductsCreateCompleted;
}
export interface ProductsCreateFailed extends Action {
    type: ProductActions.ProductsCreateFailed;
}