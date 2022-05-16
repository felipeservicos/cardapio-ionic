import { Component, OnInit } from '@angular/core';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';
@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  cardapio:any;

  constructor(servicoDeCardapio:ServicoDeCardapioService) { 
    this.cardapio=servicoDeCardapio.lanches;
  }

  ngOnInit() {
  }

}
