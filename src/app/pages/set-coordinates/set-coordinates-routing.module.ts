import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetCoordinatesPage } from './set-coordinates.page';

const routes: Routes = [
  {
    path: '',
    component: SetCoordinatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetCoordinatesPageRoutingModule {}
