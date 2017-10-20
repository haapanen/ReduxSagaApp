import {ProductAction, ProductActions} from './productActions';
import {Product} from './product';
import {ProductModule} from './productModule';

export enum RequestStatus {
    NotStarted,
    Pending,
    Completed,
    Failed
}

export interface ProductReducerState {
    status: RequestStatus;
    entities: {
        products?: Map<string, Product>;
        productModules?: Map<string, ProductModule>;
    },
    result: string[];
}

const defaultState: ProductReducerState = {
    status: RequestStatus.NotStarted,
    entities: {},
    result: []
};

export function productReducer(state: ProductReducerState = defaultState, action: ProductAction): ProductReducerState {
    switch (action.type) {
        case ProductActions.ProductsLoadStarted:
            return {
                status: RequestStatus.Pending,
                entities: {},
                result: []
            };
        case ProductActions.ProductsLoadCompleted:
            return {
                ...action.payload,
                status: RequestStatus.Completed
            };
        case ProductActions.ProductsLoadFailed:
            return {
                ...state,
                status: RequestStatus.Failed
            };
        default:
            return state;
    }
}