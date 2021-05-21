import { TestBed } from '@angular/core/testing';

import { BrazilLeagueService } from './brazil-league.service';

describe('BrazilLeagueService', () => {
  let service: BrazilLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrazilLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
