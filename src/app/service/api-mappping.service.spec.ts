import { TestBed } from '@angular/core/testing';

import { ApiMapppingService } from './api-mappping.service';

describe('ApiMapppingService', () => {
  let service: ApiMapppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMapppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
