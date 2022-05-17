import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Softskill5PageRoutingModule } from './softskill5-routing.module';

import { Softskill5Page } from './softskill5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Softskill5PageRoutingModule
  ],
  declarations: [Softskill5Page]
})
export class Softskill5PageModule {}
