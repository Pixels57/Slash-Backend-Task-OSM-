/* eslint-disable */
import { Test, TestingModule } from '@nestjs/testing';
import { CartsProductsService } from './carts_products.service';

describe('CartsProductsService', () => {
  let service: CartsProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartsProductsService],
    }).compile();

    service = module.get<CartsProductsService>(CartsProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
