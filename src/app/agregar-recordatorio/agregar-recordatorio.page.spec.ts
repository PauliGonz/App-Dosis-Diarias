import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRecordatorioPage } from './agregar-recordatorio.page';

describe('AgregarRecordatorioPage', () => {
  let component: AgregarRecordatorioPage;
  let fixture: ComponentFixture<AgregarRecordatorioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRecordatorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
