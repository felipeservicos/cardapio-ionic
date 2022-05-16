import { Component, OnInit } from '@angular/core';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {

  cardapio:any;

  constructor(servicoDeCardapio:ServicoDeCardapioService) { 
    this.cardapio=servicoDeCardapio.pratos;
  }

  ngOnInit() {
  }

}
