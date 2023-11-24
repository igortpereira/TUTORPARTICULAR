import { TestBed } from '@angular/core/testing';

import { NivelEnsinoService } from './nivel-ensino.service';

describe('NivelEnsinoService', () => {
  let service: NivelEnsinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelEnsinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
