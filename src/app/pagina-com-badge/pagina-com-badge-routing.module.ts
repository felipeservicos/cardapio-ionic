import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaComBadgePage } from './pagina-com-badge.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaComBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaComBadgePageRoutingModule {}
