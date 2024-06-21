/* eslint-disable */

import { Module } from '@nestjs/common';
import { CartsProductsService } from './carts_products.service';
import { PrismaService } from 'src/prisma.service';
import { CartsProductsController } from './carts_products.controller';

@Module({
    controllers: [CartsProductsController],
    providers: [CartsProductsService, PrismaService]
})
export class CartsProductsModule {}
