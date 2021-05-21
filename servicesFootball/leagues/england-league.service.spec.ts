import { TestBed } from '@angular/core/testing';

import { EnglandLeagueService } from './england-league.service';

describe('EnglandLeagueService', () => {
  let service: EnglandLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglandLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
