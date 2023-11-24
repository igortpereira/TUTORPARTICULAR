import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDisciplinaPage } from './add-disciplina.page';

describe('AddDisciplinaPage', () => {
  let component: AddDisciplinaPage;
  let fixture: ComponentFixture<AddDisciplinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddDisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
