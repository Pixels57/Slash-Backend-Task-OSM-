import { CartsProductsService } from './carts_products.service';
import { Carts_Products } from './carts_products.model';
export declare class CartsProductsController {
    private cartsProductsService;
    constructor(cartsProductsService: CartsProductsService);
    addItem(data: Carts_Products): Promise<Carts_Products>;
    getCart(data: number): Promise<Partial<Carts_Products>[]>;
    updateItem(data: {
        cartID: number;
        add: boolean;
        productID: number;
    }): Promise<Carts_Products>;
    removeItem(data: {
        cartID: number;
        productID: number;
    }): Promise<Carts_Products>;
}
