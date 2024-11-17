import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorMedicamentosPage } from './buscador-medicamentos.page';

describe('BuscadorMedicamentosPage', () => {
  let component: BuscadorMedicamentosPage;
  let fixture: ComponentFixture<BuscadorMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
