import {schema} from 'normalizr';

export const module = new schema.Entity("productModules");
export const moduleArray = new schema.Array(module);
export const product = new schema.Entity("products", { modules:  moduleArray });
export const productArray = [product];
