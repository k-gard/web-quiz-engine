import { TestBed } from '@angular/core/testing';

import { ComponentdataService } from './componentdata.service';

describe('ComponentdataService', () => {
  let service: ComponentdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
