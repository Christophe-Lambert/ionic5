import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AppareilsPage } from '../../appareils/appareils';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        //loadChildren: () => import('../../appareils/single-appareil/single-appareil.module').then( m => m.SingleAppareilPageModule)
        component: AppareilsPage
      },
      {
        path: 'settings',
        loadChildren: () => import('../../settings/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
