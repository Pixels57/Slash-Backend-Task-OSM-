import { Prisma } from '@prisma/client';
export declare class Carts_Products implements Prisma.Carts_ProductsCreateInput {
    cartID: number;
    productID: number;
    quantity: number;
}
