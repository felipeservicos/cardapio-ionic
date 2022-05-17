import { Component, OnInit } from '@angular/core';
import { ServicoDeCardapioService } from '../servico-de-cardapio.service';

@Component({
  selector: 'app-pratododia',
  templateUrl: './pratododia.page.html',
  styleUrls: ['./pratododia.page.scss'],
})
export class PratododiaPage implements OnInit {
pratododia:any;
totalcomdesconto:number;
  constructor(cardapio:ServicoDeCardapioService) {
    this.pratododia=[];
    this.pratododia[0]=cardapio.bebidas[2];
    this.pratododia[1]=cardapio.pratos[4];
    this.pratododia[2]=cardapio.sobremesas[4];
    this.totalcomdesconto=(this.pratododia[0].preco+this.pratododia[1].preco+this.pratododia[2].preco)*0.8;

   }

  ngOnInit() {
  }

}
