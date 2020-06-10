import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleViewPageRoutingModule } from './single-view-routing.module';

import { SingleViewPage } from './single-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleViewPageRoutingModule
  ],
  declarations: [SingleViewPage]
})
export class SingleViewPageModule {}
