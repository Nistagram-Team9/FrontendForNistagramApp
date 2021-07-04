import { TestBed, async, inject } from '@angular/core/testing';

import { RegisteredUserAuthGuard } from './registered-user-auth.guard';

describe('RegisteredUserAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisteredUserAuthGuard]
    });
  });

  it('should ...', inject([RegisteredUserAuthGuard], (guard: RegisteredUserAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
