import { TestBed } from '@angular/core/testing';

import { OjasServiceService } from './ojas-service.service';

describe('OjasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OjasServiceService = TestBed.get(OjasServiceService);
    expect(service).toBeTruthy();
  });
});
