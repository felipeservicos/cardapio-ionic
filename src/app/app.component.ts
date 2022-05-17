import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
pages: Array<{title: string, url: string, icon: string}>;
  
  constructor(private menu:MenuController) {

    menu.enable(true);

    this.pages = [
      { title: "Home", url: "home", icon: 'home' },
      { title: "Bebidas",url: "bebidas", icon: 'list' },
      { title: "Lanches",url: "lanches", icon: 'list' },
      { title: "Pratos de Entrada e Refeições",url: "pratos", icon: 'list' },
      { title: "Sobremesas",url: "sobremesas", icon: 'list' },
      

      
      
      ];

  }

  
}
