import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Softskill4PageRoutingModule } from './softskill4-routing.module';

import { Softskill4Page } from './softskill4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Softskill4PageRoutingModule
  ],
  declarations: [Softskill4Page]
})
export class Softskill4PageModule {}
