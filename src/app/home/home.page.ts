import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cardapio:any;

  constructor(servicoDeCardapio:ServicoDeCardapioService) {
    this.cardapio=servicoDeCardapio.categorias;
  }



async mostrarToast() {


}

}
