import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Softskill3Page } from './softskill3.page';

const routes: Routes = [
  {
    path: '',
    component: Softskill3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Softskill3PageRoutingModule {}
