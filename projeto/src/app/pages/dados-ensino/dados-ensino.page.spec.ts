import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosEnsinoPage } from './dados-ensino.page';

describe('DadosEnsinoPage', () => {
  let component: DadosEnsinoPage;
  let fixture: ComponentFixture<DadosEnsinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosEnsinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
