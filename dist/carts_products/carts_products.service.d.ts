import { PrismaService } from 'src/prisma.service';
import { Carts_Products } from './carts_products.model';
export declare class CartsProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Carts_Products): Promise<Carts_Products>;
    getCart(data: number): Promise<Partial<Carts_Products>[]>;
    update(cartID: number, add: boolean, productID: number): Promise<Carts_Products>;
    remove(cartID: number, productID: number): Promise<Carts_Products>;
}
