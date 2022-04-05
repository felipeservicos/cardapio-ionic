import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {

  email: string;
  telefone: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  async mostrarAlert() {
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Preencha os dados:',
    inputs: [
      {
      name: 'email',
      placeholder: 'Email'
      },
      {
        name: 'telefone',
        placeholder: 'Telefone'
        },
      ],
    buttons: [
    {
    text: 'Cancelar',
    role: 'cancel',
    cssClass: 'secondary',
    handler: () => {
    console.log('Confirm Cancel');
    }
    }, {
    text: 'Enviar',
    role: 'ok',
    handler: data => {
      this.email=data.email;
      this.telefone=data.telefone;
    console.log('Confirm Ok');
    }
    }
    ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }

}
