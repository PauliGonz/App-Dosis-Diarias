import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordatorioExitosoPage } from './recordatorio-exitoso.page';

describe('RecordatorioExitosoPage', () => {
  let component: RecordatorioExitosoPage;
  let fixture: ComponentFixture<RecordatorioExitosoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
