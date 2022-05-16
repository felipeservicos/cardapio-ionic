import { Component, OnInit } from '@angular/core';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  cardapio:any;
  
  constructor(servicoDeCardapio:ServicoDeCardapioService) {
    this.cardapio=servicoDeCardapio.bebidas;
   }

  ngOnInit() {
  }

}
