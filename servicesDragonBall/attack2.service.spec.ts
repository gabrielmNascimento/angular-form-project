import { TestBed } from '@angular/core/testing';

import { AttackService2 } from './attack2.service';

describe('AttackService2', () => {
  let service: AttackService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
