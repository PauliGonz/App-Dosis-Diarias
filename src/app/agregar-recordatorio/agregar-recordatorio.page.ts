import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Importamos AlertController

@Component({
  selector: 'app-agregar-recordatorio',
  templateUrl: './agregar-recordatorio.page.html',
  styleUrls: ['./agregar-recordatorio.page.scss'],
})
export class AgregarRecordatorioPage implements OnInit {
  selectedDate: string = '';

  constructor(private alertController: AlertController) {} 

   // Método para abrir el alerta
   async openAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este recordatorio?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          },
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Recordatorio eliminado');
          },
        },
      ],
    });

    await alert.present();
  }

  isModalOpen = false;

  openModal() {
  this.isModalOpen = true;
  }

  closeModal() {
  this.isModalOpen = false;
  }

  ngOnInit() {
  }

}


