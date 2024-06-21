/* eslint-disable */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'; 
import { Orders } from './orders.model';
import { CartsProductsService } from '../carts_products/carts_products.service';
import { CartsProductsController } from 'src/carts_products/carts_products.controller';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrdersService {

    constructor(private prisma: PrismaService, private cartsProductsService: CartsProductsService) {}

    async addOrder(data: {cartID: number}): Promise<Orders> {

        const products = await this.cartsProductsService.getCart(data.cartID);
        return this.prisma.orders.create({
            data
        });
    }
}
