import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProfessorPage } from './add-professor.page';

describe('AddProfessorPage', () => {
  let component: AddProfessorPage;
  let fixture: ComponentFixture<AddProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
