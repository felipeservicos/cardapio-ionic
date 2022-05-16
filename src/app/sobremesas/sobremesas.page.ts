import { Component, OnInit } from '@angular/core';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit {

  cardapio:any;

  constructor(servicoDeCardapio:ServicoDeCardapioService) { 
    this.cardapio=servicoDeCardapio.sobremesas;
  }

  ngOnInit() {
  }

}
