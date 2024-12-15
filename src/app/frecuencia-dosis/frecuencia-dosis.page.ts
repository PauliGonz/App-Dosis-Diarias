import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-frecuencia-dosis',
  templateUrl: './frecuencia-dosis.page.html',
  styleUrls: ['./frecuencia-dosis.page.scss'],
})
export class FrecuenciaDosisPage implements OnInit {
   // Declarar'selectedFrequency' con un valor inicial
   selectedFrequency: string = ''; // Puede ser 'diario', 'semanal', 'mensual' etc.

   constructor(private toastController: ToastController) {}  // Inyectar ToastController

   // Método para mostrar el toast
   async showToast() {
     const toast = await this.toastController.create({
       message: 'Frecuencia de dosis seleccionada: ' + this.selectedFrequency,
       duration: 2000,
     });
     toast.present();
   }

  ngOnInit() {
  }

}

export class AgregarRecordatorioPage {
  constructor(private toastController: ToastController) {}

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Recordatorio agregado con éxito!',
      duration: 2000,
    });
    toast.present();
  }
}
