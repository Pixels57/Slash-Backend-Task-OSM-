import { Test, TestingModule } from '@nestjs/testing';
import { CartsProductsController } from './carts_products.controller';

describe('CartsProductsController', () => {
  let controller: CartsProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartsProductsController],
    }).compile();

    controller = module.get<CartsProductsController>(CartsProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
