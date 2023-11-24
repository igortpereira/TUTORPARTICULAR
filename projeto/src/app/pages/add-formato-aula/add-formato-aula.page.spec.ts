import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFormatoAulaPage } from './add-formato-aula.page';

describe('AddFormatoAulaPage', () => {
  let component: AddFormatoAulaPage;
  let fixture: ComponentFixture<AddFormatoAulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddFormatoAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
