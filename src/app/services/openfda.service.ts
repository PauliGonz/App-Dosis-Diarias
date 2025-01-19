import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Asegúrate de importar map si aún no lo tienes

export interface DrugInfo {
  active_ingredient: string;
  warnings: string;
  dosage_and_administration: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class OpenfdaService {
  private apiUrl = 'https://api.fda.gov/drug/label.json'; // URL OpenFDA
  private apiKey = 'yqClty0ktAWRPbG9EYdTRpGY75YOf0oFJ43Tm8B6'; // clave API

  constructor(private http: HttpClient) {}

  // Método para obtener información estructurada del medicamento 
  getDrugInfo(ingredient: string): Observable<DrugInfo> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&search=active_ingredient:${ingredient}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        const data = response.results[0]; // Toma el primer resultado
        return {
          active_ingredient: data.openfda.generic_name?.[0] || 'No disponible',
          warnings: data.warnings?.[0] || 'Sin advertencias',
          dosage_and_administration: data.dosage_and_administration?.[0] || 'Sin indicaciones',
          description: data.description?.[0] || 'Sin descripción',
        } as DrugInfo;
      })
    );
  }
}
