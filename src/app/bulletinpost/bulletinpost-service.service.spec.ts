import { TestBed } from '@angular/core/testing';

import { BulletinpostServiceService } from './bulletinpost-service.service';

describe('BulletinpostServiceService', () => {
  let service: BulletinpostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulletinpostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
