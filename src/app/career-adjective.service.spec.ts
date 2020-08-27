import { TestBed } from '@angular/core/testing';

import { CareerAdjectiveService } from './career-adjective.service';

describe('CareerAdjectiveService', () => {
  let service: CareerAdjectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerAdjectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
