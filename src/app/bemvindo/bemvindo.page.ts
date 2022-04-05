import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.page.html',
  styleUrls: ['./bemvindo.page.scss'],
})
export class BemvindoPage implements OnInit {

  logado:string;
  constructor() { 
this.logado=localStorage.getItem("usuarioLogado");
  }

  ngOnInit() {
  }

}
