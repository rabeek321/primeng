import { TestBed } from '@angular/core/testing';

import { PrimengService } from './primeng.service';

describe('PrimengService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimengService = TestBed.get(PrimengService);
    expect(service).toBeTruthy();
  });
});
