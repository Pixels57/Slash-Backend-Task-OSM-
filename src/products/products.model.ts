/* eslint-disable */
import { Prisma, Carts_Products, Orders_Products } from '@prisma/client';

export class Products implements Prisma.ProductsCreateInput {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  carts_products?: Prisma.Carts_ProductsCreateNestedManyWithoutProductInput;
  order_products?: Prisma.Orders_ProductsCreateNestedManyWithoutProductInput;
}