import { TestBed } from '@angular/core/testing';

import { RecipientAuthenticationService } from './recipient-authentication.service';

describe('RecipientAuthenticationService', () => {
  let service: RecipientAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipientAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
