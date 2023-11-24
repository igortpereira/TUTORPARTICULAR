import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeusDadosAdminPage } from './meus-dados-admin.page';

describe('MeusDadosAdminPage', () => {
  let component: MeusDadosAdminPage;
  let fixture: ComponentFixture<MeusDadosAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeusDadosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
