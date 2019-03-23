import { TestBed } from '@angular/core/testing';

import { ErrorHandlerServiceConfigService } from './error-handler-service-config.service';

describe('ErrorHandlerServiceConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorHandlerServiceConfigService = TestBed.get(ErrorHandlerServiceConfigService);
    expect(service).toBeTruthy();
  });
});
