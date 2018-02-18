import { TestBed, inject } from '@angular/core/testing';

import { TheamlistService } from './theamlist.service';

describe('TheamlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheamlistService]
    });
  });

  it('should be created', inject([TheamlistService], (service: TheamlistService) => {
    expect(service).toBeTruthy();
  }));
});
