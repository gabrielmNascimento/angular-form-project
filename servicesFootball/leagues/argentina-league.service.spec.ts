import { TestBed } from '@angular/core/testing';

import { ArgentinaLeagueService } from './argentina-league.service';

describe('ArgentinaLeagueService', () => {
  let service: ArgentinaLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgentinaLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
