import { TestBed } from '@angular/core/testing';

import { SrvceService } from './srvce.service';

describe('SrvceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrvceService = TestBed.get(SrvceService);
    expect(service).toBeTruthy();
  });
});
