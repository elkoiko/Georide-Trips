import { TestBed } from '@angular/core/testing';

import { GeorideAPIService } from './georide-api.service';

describe('GeorideAPIService', () => {
  let service: GeorideAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeorideAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
