import { TestBed } from '@angular/core/testing';

import { FrDropdownService } from './fr-dropdown.service';

describe('FrDropdownService', () => {
  let service: FrDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
