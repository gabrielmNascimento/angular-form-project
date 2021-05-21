import { TestBed } from '@angular/core/testing';

import { SpainLeagueService } from './spain-league.service';

describe('SpainLeagueService', () => {
  let service: SpainLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpainLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
