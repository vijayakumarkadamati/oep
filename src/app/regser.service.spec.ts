import { TestBed, inject } from '@angular/core/testing';

import { RegserService } from './regser.service';

describe('RegserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegserService]
    });
  });

  it('should be created', inject([RegserService], (service: RegserService) => {
    expect(service).toBeTruthy();
  }));
});
