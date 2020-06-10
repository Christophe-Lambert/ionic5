import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppareilFormPage } from './appareil-form.page';

const routes: Routes = [
  {
    path: '',
    component: AppareilFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppareilFormPageRoutingModule {}
