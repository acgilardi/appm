import { TestBed } from '@angular/core/testing';

import { CommonRegistrationService } from './common-registration.service';

describe('CommonRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonRegistrationService = TestBed.get(CommonRegistrationService);
    expect(service).toBeTruthy();
  });
});
