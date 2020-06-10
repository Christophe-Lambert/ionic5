import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleAppareilPageRoutingModule } from './single-appareil-routing.module';

import { SingleAppareilPage } from './single-appareil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleAppareilPageRoutingModule
  ],
  declarations: [SingleAppareilPage]
})
export class SingleAppareilPageModule {}
