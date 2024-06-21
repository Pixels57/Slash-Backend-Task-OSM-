/* eslint-disable */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartsProductsModule } from './carts_products/carts_products.module';
import { OrdersProductsModule } from './orders_products/orders_products.module';

@Module({
  imports: [CartsProductsModule, OrdersProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
