import { TestBed, inject } from '@angular/core/testing';

import { FranchiseService } from './franchise.service';

describe('FranchiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FranchiseService]
    });
  });

  it('should be created', inject([FranchiseService], (service: FranchiseService) => {
    expect(service).toBeTruthy();
  }));
});
