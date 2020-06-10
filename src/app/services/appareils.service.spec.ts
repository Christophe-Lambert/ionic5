import { TestBed } from '@angular/core/testing';

import { AppareilsService } from './appareils.service';

describe('AppareilsService', () => {
  let service: AppareilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppareilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
