/* eslint-disable */

import { Controller, Get, Body, Post, Param, Put, Delete} from '@nestjs/common';
import { CartsProductsService } from './carts_products.service';
import { Carts_Products } from './carts_products.model';
import { Prisma } from '@prisma/client';

@Controller('api/cart')
export class CartsProductsController {

    constructor (private cartsProductsService: CartsProductsService) {}

    @Post('add')
    async addItem(@Body() data: Carts_Products): Promise<Carts_Products> {
        return this.cartsProductsService.create(data);
    }

    @Get(':user_id')
    async getCart(@Param('user_id') data: number): Promise<Partial<Carts_Products>[]> {
        return this.cartsProductsService.getCart(data);
    }

    @Put('update')
    async updateItem(@Body() data: {cartID: number; add: boolean; productID: number}): Promise<Carts_Products> {
        const { cartID, productID, add } = data;
        return this.cartsProductsService.update(cartID, add, productID);
    }

    @Delete('remove')
    async removeItem(@Body() data: {cartID: number; productID: number}): Promise<Carts_Products> {
        const { cartID, productID } = data;
        return this.cartsProductsService.remove(cartID, productID);
    }
}
