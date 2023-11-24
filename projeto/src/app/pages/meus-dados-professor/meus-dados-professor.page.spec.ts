import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusDadosProfessorPage } from './meus-dados-professor.page';

describe('MeusDadosProfessorPage', () => {
  let component: MeusDadosProfessorPage;
  let fixture: ComponentFixture<MeusDadosProfessorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeusDadosProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
