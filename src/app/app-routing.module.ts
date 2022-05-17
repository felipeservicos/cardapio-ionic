import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/bebidas',
    redirectTo: 'bebidas',
    pathMatch: 'full'
  },
  {
  path: 'home/pratos',
  redirectTo: 'pratos',
  pathMatch: 'full'
},
{
  path: 'home/sobremesas',
  redirectTo: 'sobremesas',
  pathMatch: 'full'
},
{
  path: 'home/lanches',
  redirectTo: 'lanches',
  pathMatch: 'full'
},
  
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'pratos',
    loadChildren: () => import('./pratos/pratos.module').then( m => m.PratosPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'pratododia',
    loadChildren: () => import('./pratododia/pratododia.module').then( m => m.PratododiaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
