import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppareilsPage } from './pages/appareils/appareils';

const routes: Routes = [
  //{
  //  path: 'home',
  //  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  //},
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'page-appareils',
    component: AppareilsPage
  },
  {
    path: 'single-appareil',
    loadChildren: () => import('./pages/appareils/single-appareil/single-appareil.module').then( m => m.SingleAppareilPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./pages/options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'appareil-form',
    loadChildren: () => import('./pages/appareils/appareil-form/appareil-form.module').then( m => m.AppareilFormPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'single-view',
    loadChildren: () => import('./pages/single-view/single-view.module').then( m => m.SingleViewPageModule)
  },
  {
    path: 'new-view',
    loadChildren: () => import('./pages/new-view/new-view.module').then( m => m.NewViewPageModule)
  },
  {
    path: 'set-coordinates',
    loadChildren: () => import('./pages/set-coordinates/set-coordinates.module').then( m => m.SetCoordinatesPageModule)
  },
  {
    path: 'home-nature-view',
    loadChildren: () => import('./pages/home-nature-view/home-nature-view.module').then( m => m.HomeNatureViewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
