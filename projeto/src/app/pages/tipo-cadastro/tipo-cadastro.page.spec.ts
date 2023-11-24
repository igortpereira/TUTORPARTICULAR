import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoCadastroPage } from './tipo-cadastro.page';

describe('TipoCadastroPage', () => {
  let component: TipoCadastroPage;
  let fixture: ComponentFixture<TipoCadastroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TipoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
