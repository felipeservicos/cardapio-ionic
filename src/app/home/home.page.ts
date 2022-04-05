import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController:ToastController) {}



async mostrarToast(param) {
  const toast = await this.toastController.create({
    message: param,
    duration: 2000
  });
  if(param){
  toast.present();
  }

}

}
