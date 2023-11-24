import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProfessorDisciplinaPage } from './add-professor-disciplina.page';

describe('AddProfessorDisciplinaPage', () => {
  let component: AddProfessorDisciplinaPage;
  let fixture: ComponentFixture<AddProfessorDisciplinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProfessorDisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
