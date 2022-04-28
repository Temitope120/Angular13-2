import { TestBed } from '@angular/core/testing';

import { ApiPostMethodService } from './api-post-method.service';

describe('ApiPostMethodService', () => {
  let service: ApiPostMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPostMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
