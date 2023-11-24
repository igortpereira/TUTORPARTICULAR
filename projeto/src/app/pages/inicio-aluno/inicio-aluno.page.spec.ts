import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAlunoPage } from './inicio-aluno.page';

describe('InicioAlunoPage', () => {
  let component: InicioAlunoPage;
  let fixture: ComponentFixture<InicioAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
