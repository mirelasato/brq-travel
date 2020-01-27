import { TestBed } from '@angular/core/testing';

import { RegistertravelService } from './registertravel.service';

describe('RegistertravelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistertravelService = TestBed.get(RegistertravelService);
    expect(service).toBeTruthy();
  });
});
