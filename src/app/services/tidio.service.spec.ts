import { TestBed } from '@angular/core/testing';

import { TidioService } from './tidio.service';

describe('TidioService', () => {
  let service: TidioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TidioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
