export interface ProductModule {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    modifiedAt?: string;
    createdBy: string;
    modifiedBy?: string;
    price: number;
}