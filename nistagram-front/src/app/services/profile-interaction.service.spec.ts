import { TestBed } from '@angular/core/testing';

import { ProfileInteractionService } from './profile-interaction.service';

describe('ProfileInteractionService', () => {
  let service: ProfileInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
