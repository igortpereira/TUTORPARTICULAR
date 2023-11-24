import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatoAulaPage } from './formato-aula.page';

describe('FormatoAulaPage', () => {
  let component: FormatoAulaPage;
  let fixture: ComponentFixture<FormatoAulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormatoAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
