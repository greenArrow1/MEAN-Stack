import { ProductsModule } from './products.module';

describe('CustomersModule', () => {
  let customersModule: ProductsModule;

  beforeEach(() => {
    customersModule = new ProductsModule();
  });

  it('should create an instance', () => {
    expect(customersModule).toBeTruthy();
  });
});
