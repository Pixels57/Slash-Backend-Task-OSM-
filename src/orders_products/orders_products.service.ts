/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Orders_Products } from './orders_products.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrdersProductsService {

    constructor (private prisma: PrismaService) {}

    async create(data: Orders_Products): Promise<Orders_Products> {
        const { orderID, productID, quantity } = data;

        const createData: Prisma.Orders_ProductsCreateInput = {
            ...data,
            ...(productID && { product: { connect: { id: productID as any } } }),
        };
        
        return this.prisma.orders_Products.create({
            create: {
                orderID: orderID,
                productID: productID,
                quantity: quantity, // Assuming you want to set quantity to 1 on create
            }
        });
    }
}
