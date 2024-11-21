import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { medcineGuard } from './medcine.guard';

describe('medcineGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => medcineGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
