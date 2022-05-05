import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Softskill1Page } from './softskill1.page';

const routes: Routes = [
  {
    path: '',
    component: Softskill1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Softskill1PageRoutingModule {}
