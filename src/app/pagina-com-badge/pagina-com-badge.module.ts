import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaComBadgePageRoutingModule } from './pagina-com-badge-routing.module';

import { PaginaComBadgePage } from './pagina-com-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaComBadgePageRoutingModule
  ],
  declarations: [PaginaComBadgePage]
})
export class PaginaComBadgePageModule {}
