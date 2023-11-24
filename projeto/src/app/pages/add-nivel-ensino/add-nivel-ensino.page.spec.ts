import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNivelEnsinoPage } from './add-nivel-ensino.page';

describe('AddNivelEnsinoPage', () => {
  let component: AddNivelEnsinoPage;
  let fixture: ComponentFixture<AddNivelEnsinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNivelEnsinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
