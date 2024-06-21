/* eslint-disable */

import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders.model';

@Controller('api/orders')
export class OrdersController {
    
    constructor (private ordersService: OrdersService) {}

    @Post()
    async addOrder(@Body() data: {cartID: number}): Promise<number> {
        return this.ordersService.create(cartID);
    }
}
