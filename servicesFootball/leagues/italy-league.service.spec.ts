import { TestBed } from '@angular/core/testing';

import { ItalyLeagueService } from './italy-league.service';

describe('ItalyLeagueService', () => {
  let service: ItalyLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItalyLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
