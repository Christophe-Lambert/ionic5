import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeNatureViewPageRoutingModule } from './home-nature-view-routing.module';

import { HomeNatureViewPage } from './home-nature-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeNatureViewPageRoutingModule
  ],
  declarations: [HomeNatureViewPage]
})
export class HomeNatureViewPageModule {}
