import { Test, TestingModule } from '@nestjs/testing';
import { OrdersProductsController } from './orders_products.controller';

describe('OrdersProductsController', () => {
  let controller: OrdersProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersProductsController],
    }).compile();

    controller = module.get<OrdersProductsController>(OrdersProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
