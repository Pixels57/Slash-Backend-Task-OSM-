/* eslint-disable */
import { Prisma, Users, Orders_Products } from '@prisma/client';

export class Orders implements Prisma.OrdersCreateInput {
  id: number;
  date: Date;
  status: string;
  userID: number;
  user: Prisma.UsersCreateNestedOneWithoutOrdersInput;
  total: number;
  order_products?: Prisma.Orders_ProductsCreateNestedManyWithoutOrderInput;
}