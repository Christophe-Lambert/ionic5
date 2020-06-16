import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetCoordinatesPageRoutingModule } from './set-coordinates-routing.module';

import { SetCoordinatesPage } from './set-coordinates.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetCoordinatesPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [SetCoordinatesPage]
})
export class SetCoordinatesPageModule {}
