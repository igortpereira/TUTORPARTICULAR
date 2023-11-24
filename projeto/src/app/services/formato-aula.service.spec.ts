import { TestBed } from '@angular/core/testing';

import { FormatoAulaService } from './formato-aula.service';

describe('FormatoAulaService', () => {
  let service: FormatoAulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatoAulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
