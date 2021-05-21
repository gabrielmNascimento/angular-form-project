import { TestBed } from '@angular/core/testing';

import { GermanyLeagueService } from './germany-league.service';

describe('GermanyLeagueService', () => {
  let service: GermanyLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GermanyLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
