import { TestBed } from '@angular/core/testing';

import { SelfImageService } from './self-image.service';

describe('SelfImageService', () => {
  let service: SelfImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
