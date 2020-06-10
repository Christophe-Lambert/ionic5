import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeNatureViewPage } from './home-nature-view.page';

const routes: Routes = [
  {
    path: '',
    component: HomeNatureViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeNatureViewPageRoutingModule {}
