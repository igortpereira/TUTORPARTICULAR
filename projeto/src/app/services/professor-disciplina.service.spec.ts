import { TestBed } from '@angular/core/testing';

import { ProfessorDisciplinaService } from './professor-disciplina.service';

describe('ProfessorDisciplinaService', () => {
  let service: ProfessorDisciplinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorDisciplinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
