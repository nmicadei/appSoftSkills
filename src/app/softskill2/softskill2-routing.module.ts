import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Softskill2Page } from './softskill2.page';

const routes: Routes = [
  {
    path: '',
    component: Softskill2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Softskill2PageRoutingModule {}
