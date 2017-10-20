import * as React from "react";
import {asyncComponent} from 'react-async-component';
import {ProductListProps} from './ProductList';

export const ProductListAsync = asyncComponent<ProductListProps>({
    resolve: () => import("./ProductList").then(x => x.ProductList),
    LoadingComponent: props => <div>Loading product list...</div>,
    ErrorComponent: props => <div>Error loading product list...</div>
});