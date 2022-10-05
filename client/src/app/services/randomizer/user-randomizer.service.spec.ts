import { TestBed } from '@angular/core/testing';

import { UserRandomizerService } from './user-randomizer.service';

describe('RandomizerService', () => {
  let service: UserRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
