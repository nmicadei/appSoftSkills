import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Softskill4Page } from './softskill4.page';

const routes: Routes = [
  {
    path: '',
    component: Softskill4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Softskill4PageRoutingModule {}
