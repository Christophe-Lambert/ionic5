import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleAppareilPage } from './single-appareil.page';

const routes: Routes = [
  {
    path: '',
    component: SingleAppareilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleAppareilPageRoutingModule {}
