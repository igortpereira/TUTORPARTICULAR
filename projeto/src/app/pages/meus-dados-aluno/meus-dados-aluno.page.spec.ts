import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusDadosAlunoPage } from './meus-dados-aluno.page';

describe('MeusDadosAlunoPage', () => {
  let component: MeusDadosAlunoPage;
  let fixture: ComponentFixture<MeusDadosAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeusDadosAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
