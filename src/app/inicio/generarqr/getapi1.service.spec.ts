import { TestBed } from '@angular/core/testing';

import { Getapi1Service } from './getapi1.service';

describe('Getapi1Service', () => {
  let service: Getapi1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getapi1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
