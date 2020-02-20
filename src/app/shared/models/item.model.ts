import { Product } from './product.model';

export class Item {
    product: Product;
    quantity: number;

    constructor(product: Product, quant: number) {
        this.product = product;
        this.quantity = quant;
    }
}

