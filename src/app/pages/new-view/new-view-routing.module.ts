import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewViewPage } from './new-view.page';

const routes: Routes = [
  {
    path: '',
    component: NewViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewViewPageRoutingModule {}
