import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Softskill3PageRoutingModule } from './softskill3-routing.module';

import { Softskill3Page } from './softskill3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Softskill3PageRoutingModule
  ],
  declarations: [Softskill3Page]
})
export class Softskill3PageModule {}
