import { TestBed } from '@angular/core/testing';

import { ColombiaLeagueService } from './colombia-league.service';

describe('ColombiaLeagueService', () => {
  let service: ColombiaLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColombiaLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
