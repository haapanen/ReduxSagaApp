import {Product} from './product';

export class Api {
    getProducts = () => {
        return fetch("/api/product", this.getOptions())
            .then(res => res.json());
    };

    createProduct = (product: Partial<Product>) => {
        return fetch("/api/product", this.postOptions(product))
            .then(res => res.json());
    };

    private getOptions(): RequestInit {
        return {
            credentials: "same-origin"
        };
    }

    private postOptions(payload: object): RequestInit {
        return {
            method: 'POST',
            credentials: "same-origin",
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
    }
}