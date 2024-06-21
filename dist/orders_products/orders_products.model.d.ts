import { Prisma } from '@prisma/client';
export declare class Orders_Products implements Prisma.Orders_ProductsCreateInput {
    orderID: number;
    productID: number;
    order: Prisma.OrdersCreateNestedOneWithoutOrder_productsInput;
    product: Prisma.ProductsCreateNestedOneWithoutOrder_productsInput;
}
