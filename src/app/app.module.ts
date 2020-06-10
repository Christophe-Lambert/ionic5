import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppareilsPage } from './pages/appareils/appareils';
import { SettingsPage } from './pages/settings/settings/settings.page';
import { AppareilsService } from './services/appareils.service';
import { OptionsPage } from './pages/options/options.page';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppareilFormPage } from './pages/appareils/appareil-form/appareil-form.page';
import { AuthService } from './services/auth.service';
import { AuthPage } from './pages/auth/auth.page';



@NgModule({
  declarations: [
    AppComponent,
    AppareilsPage,
    SettingsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
    ],
  entryComponents: [AppareilsPage, SettingsPage,OptionsPage,AppareilFormPage,AuthPage],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NavParams,
    AppareilsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
