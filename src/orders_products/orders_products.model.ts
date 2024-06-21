/* eslint-disable */
import { Prisma, Orders, Products } from '@prisma/client';

export class Orders_Products implements Prisma.Orders_ProductsCreateInput {
  orderID: number;
  productID: number;
  quantity: number;
}