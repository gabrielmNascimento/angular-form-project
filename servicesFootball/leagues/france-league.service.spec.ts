import { TestBed } from '@angular/core/testing';

import { FranceLeagueService } from './france-league.service';

describe('FranceLeagueService', () => {
  let service: FranceLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranceLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
