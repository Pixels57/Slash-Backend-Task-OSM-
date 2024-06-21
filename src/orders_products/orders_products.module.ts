import { Module } from '@nestjs/common';
import { OrdersProductsService } from './orders_products.service';
import { OrdersProductsController } from './orders_products.controller';

@Module({
  providers: [OrdersProductsService],
  controllers: [OrdersProductsController]
})
export class OrdersProductsModule {}
