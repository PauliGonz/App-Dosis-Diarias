import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrecuenciaDosisPage } from './frecuencia-dosis.page';

describe('FrecuenciaDosisPage', () => {
  let component: FrecuenciaDosisPage;
  let fixture: ComponentFixture<FrecuenciaDosisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecuenciaDosisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
