import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioProfessorPage } from './inicio-professor.page';

describe('InicioProfessorPage', () => {
  let component: InicioProfessorPage;
  let fixture: ComponentFixture<InicioProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
