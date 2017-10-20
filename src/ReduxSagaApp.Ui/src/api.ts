export class Api {
    getProducts = () => {
        return fetch("/api/product", this.getOptions())
            .then(res => res.json());
    };

    private getOptions(): RequestInit {
        return {
            credentials: "same-origin"
        };
    }
}