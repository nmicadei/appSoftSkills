import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Softskill2PageRoutingModule } from './softskill2-routing.module';

import { Softskill2Page } from './softskill2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Softskill2PageRoutingModule
  ],
  declarations: [Softskill2Page]
})
export class Softskill2PageModule {}
