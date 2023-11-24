import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProfessorPage } from './perfil-professor.page';

describe('PerfilProfessorPage', () => {
  let component: PerfilProfessorPage;
  let fixture: ComponentFixture<PerfilProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
