import { TestBed } from '@angular/core/testing';

import { AttackService3 } from './attack3.service';

describe('AttackService3', () => {
  let service: AttackService3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackService3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
