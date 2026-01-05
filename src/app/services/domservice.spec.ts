import { TestBed } from '@angular/core/testing';

import { Domservice } from './domservice';

describe('Domservice', () => {
  let service: Domservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Domservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
