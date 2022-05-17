import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Softskill5Page } from './softskill5.page';

const routes: Routes = [
  {
    path: '',
    component: Softskill5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Softskill5PageRoutingModule {}
