import { TestBed } from '@angular/core/testing';

import { doctoresService } from './empleados.service';

describe('doctoresService', () => {
  let service: doctoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(doctoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
