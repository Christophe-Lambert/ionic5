import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewViewPageRoutingModule } from './new-view-routing.module';

//import { NewViewPage } from './new-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewViewPageRoutingModule
  ],
  //declarations: [NewViewPage]
})
export class NewViewPageModule {}
