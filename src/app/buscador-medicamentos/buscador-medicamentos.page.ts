import { Component, OnInit } from '@angular/core';
import { OpenfdaService, DrugInfo } from '../services/openfda.service';

@Component({
  selector: 'app-buscador-medicamentos',
  templateUrl: './buscador-medicamentos.page.html',
  styleUrls: ['./buscador-medicamentos.page.scss'],
})
export class BuscadorMedicamentosPage implements OnInit {

  ingredient: string = ''; // Almacena el término de búsqueda
  drugInfo: DrugInfo | null = null; // Almacena los datos del medicamento
  errorMessage: string = ''; // Almacena mensajes de error

  constructor(private openfdaService: OpenfdaService) {}

  searchDrug() {
    if (this.ingredient.trim()) {
      this.openfdaService.getDrugInfo(this.ingredient).subscribe(
        (data) => {
          this.drugInfo = data;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error al obtener datos:', error);
          this.errorMessage = 'No se encontraron datos para el ingrediente ingresado.';
          this.drugInfo = null;
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingrese un ingrediente para buscar.';
      this.drugInfo = null;
    }
  }

  ngOnInit() {
  }

}
