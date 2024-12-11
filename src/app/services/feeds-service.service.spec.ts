import { TestBed } from '@angular/core/testing';

import { FeedsServiceService } from './feeds-service.service';

describe('FeedsServiceService', () => {
  let service: FeedsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
