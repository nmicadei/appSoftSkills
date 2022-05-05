import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Softskill1PageRoutingModule } from './softskill1-routing.module';

import { Softskill1Page } from './softskill1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Softskill1PageRoutingModule
  ],
  declarations: [Softskill1Page]
})
export class Softskill1PageModule {}
