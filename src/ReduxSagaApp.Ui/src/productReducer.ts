import {Action} from "redux";

export interface ProductReducerState {

}

const defaultState: ProductReducerState = {};

export function productReducer(state: ProductReducerState = defaultState, action: Action): ProductReducerState {
    return state;
}