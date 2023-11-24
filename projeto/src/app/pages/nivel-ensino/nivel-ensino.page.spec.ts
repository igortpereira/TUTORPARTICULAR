import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelEnsinoPage } from './nivel-ensino.page';

describe('NivelEnsinoPage', () => {
  let component: NivelEnsinoPage;
  let fixture: ComponentFixture<NivelEnsinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NivelEnsinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
