import { CustomMatertialModuleModule } from './custom-matertial-module.module';

describe('CustomMatertialModuleModule', () => {
  let customMatertialModuleModule: CustomMatertialModuleModule;

  beforeEach(() => {
    customMatertialModuleModule = new CustomMatertialModuleModule();
  });

  it('should create an instance', () => {
    expect(customMatertialModuleModule).toBeTruthy();
  });
});
