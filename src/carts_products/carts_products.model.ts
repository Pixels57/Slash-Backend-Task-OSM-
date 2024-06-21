/* eslint-disable */

import { Prisma } from '@prisma/client';

  

export class Carts_Products implements Prisma.Carts_ProductsCreateInput {
  cartID: number;
  productID: number;
  quantity: number;
  //product: { connect: { id: number } };
}