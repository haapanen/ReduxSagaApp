export interface Product {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    modifiedAt?: string;
    createdBy: string;
    modifiedBy?: string;
    price: number;
    soldCount: number;
    modules: string[];
}