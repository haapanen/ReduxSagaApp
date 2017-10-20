import * as React from "react";
import {Product} from './product';
import {RequestStatus} from './productReducer';

export interface ProductListProps {
    products: Product[];
    status: RequestStatus;
    loadProducts: () => void;
}

export class ProductList extends React.Component<ProductListProps> {
    componentWillMount(): void {
        if (this.props.status === RequestStatus.NotStarted && this.props.products.length === 0) {
            this.props.loadProducts();
        }
    }

    render(): JSX.Element {
        console.log(this.props.products);
        return (
            <div>
                <h2>Product list</h2>
                {this.props.products.length > 0 ? this.renderProductList() : this.renderEmptyProductList()}
            </div>
        );
    }

    private renderProductList() {
        const fields = Object.keys(this.props.products[0]);
        return (
            <table>
                <thead>
                <tr>
                    {fields.map(field => {
                        return (
                            <td key={field}>{field}</td>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {this.props.products.map(product => {
                    return (
                        <tr key={product.id}>
                            {fields.map(field => <td>{product[field]}</td>)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }

    private renderEmptyProductList() {
        return "No products";
    }
};
