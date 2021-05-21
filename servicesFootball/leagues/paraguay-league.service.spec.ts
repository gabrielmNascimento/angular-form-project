import { TestBed } from '@angular/core/testing';

import { ParaguayLeagueService } from './paraguay-league.service';

describe('ParaguayLeagueService', () => {
  let service: ParaguayLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParaguayLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
