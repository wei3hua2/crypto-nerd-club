import { TestBed } from '@angular/core/testing';

import { GhService } from './gh.service';

describe('GhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhService = TestBed.get(GhService);
    expect(service).toBeTruthy();
  });
});
