import { TestBed } from '@angular/core/testing';

import { RussiaLeagueService } from './russia-league.service';

describe('RussiaLeagueService', () => {
  let service: RussiaLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RussiaLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
