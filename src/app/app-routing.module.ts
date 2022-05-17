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
    path: 'softskill1',
    loadChildren: () => import('./softskill1/softskill1.module').then( m => m.Softskill1PageModule)
  },
  {
    path: 'softskill2',
    loadChildren: () => import('./softskill2/softskill2.module').then( m => m.Softskill2PageModule)
  },  {
    path: 'softskill3',
    loadChildren: () => import('./softskill3/softskill3.module').then( m => m.Softskill3PageModule)
  },
  {
    path: 'softskill4',
    loadChildren: () => import('./softskill4/softskill4.module').then( m => m.Softskill4PageModule)
  },
  {
    path: 'softskill5',
    loadChildren: () => import('./softskill5/softskill5.module').then( m => m.Softskill5PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
