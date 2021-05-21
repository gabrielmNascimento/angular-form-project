import { TestBed } from '@angular/core/testing';

import { SkillService2 } from './skill2.service';

describe('SkillService2', () => {
  let service: SkillService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
