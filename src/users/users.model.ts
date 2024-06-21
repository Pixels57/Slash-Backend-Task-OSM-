/* eslint-disable */
import {Prisma} from '@prisma/client';

export class Users implements Prisma.UsersCreateInput {
  id: number;
  email: string; unique: true;
  name: string;
  password: string; 
  address: string;
  cartID: number;
  cart: Prisma.OrdersCreateNestedManyWithoutUserInput;
  Orders?: Prisma.OrdersCreateNestedManyWithoutUserInput;
}