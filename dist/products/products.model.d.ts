import { Prisma } from '@prisma/client';
export declare class Products implements Prisma.ProductsCreateInput {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    carts_products?: Prisma.Carts_ProductsCreateNestedManyWithoutProductInput;
    order_products?: Prisma.Orders_ProductsCreateNestedManyWithoutProductInput;
}
