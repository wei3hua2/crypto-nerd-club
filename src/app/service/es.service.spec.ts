import { TestBed } from '@angular/core/testing';

import { EsService } from './es.service';

describe('EsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsService = TestBed.get(EsService);
    expect(service).toBeTruthy();
  });
});
