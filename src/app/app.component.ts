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
      { title: "Login", url: "login", icon: 'card'  },
      { title: "Meus Dados",url: "meus-dados", icon: 'list' },
      { title: "Pagina Com Badge",url: "pagina-com-badge", icon: 'list' }
      

      
      
      ];

  }

  
}
