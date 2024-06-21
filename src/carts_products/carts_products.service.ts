/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Carts_Products } from './carts_products.model';
import { Prisma } from '@prisma/client';
// import { parse } from 'path';


interface CartsProductsCreateInputOptionalProduct extends Omit<Prisma.Carts_ProductsCreateInput, 'product'> {
    product?: Prisma.ProductsCreateNestedOneWithoutCarts_productsInput;
  }

@Injectable()
export class CartsProductsService {

    constructor (private prisma: PrismaService) {}

    async create(data: Carts_Products): Promise<Carts_Products> {
        const { cartID, productID } = data;

        const createData: Prisma.Carts_ProductsCreateInput = {
            ...data,
            ...(productID && { product: { connect: { id: productID as any } } }),
        };
        
        return this.prisma.carts_Products.upsert({
            where: {
                cartID_productID: {
                    cartID: cartID,
                    productID: productID,
                },
            },
            create: {
                cartID: cartID,
                productID: productID,
                quantity: 1, // Assuming you want to set quantity to 1 on create
            },
            update: {
                quantity: {
                    increment: 1
                }
            },
        });
    }

    async getCart(data: number): Promise<Partial<Carts_Products>[]> {
        const cartIDString = data.toString();   
        const ID = parseInt(cartIDString, 10);
        return this.prisma.carts_Products.findMany({
          where: {
            cartID: ID
          },
          select: {
            productID: true,
            quantity: true,
          }
        });
      }

      async update(cartID: number, add: boolean, productID: number): Promise<Carts_Products> {
        if (add) {
            return this.prisma.carts_Products.update({
                where: {
                    cartID_productID: {
                        cartID: cartID,
                        productID: productID,
                    },
                },
                data: {
                    quantity: {
                        increment: 1
                    }
                },
            });
        } else {
            return this.prisma.carts_Products.update({
                where: {
                    cartID_productID: {
                        cartID: cartID,
                        productID: productID,
                    },
                },
                data: {
                    quantity: {
                        decrement: 1
                    }
                },
            });
        }
      }

      async remove(cartID: number, productID: number): Promise<Carts_Products> {
        return this.prisma.carts_Products.delete({
            where: {
                cartID_productID: {
                    cartID: cartID,
                    productID: productID,
                },
            },
        });
      }
}
