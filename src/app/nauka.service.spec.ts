import { TestBed } from '@angular/core/testing';

import { NaukaService } from './nauka.service';

describe('NaukaService', () => {
  let service: NaukaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaukaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
