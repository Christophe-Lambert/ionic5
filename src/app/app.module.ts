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
import { NewViewPage } from './pages/new-view/new-view.page';
import { NatureViewService } from './services/nature-view.service';
import { AgmCoreModule } from '@agm/core'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    AppComponent,
    AppareilsPage,
    SettingsPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage,
    NewViewPage
    ],
  entryComponents: [AppareilsPage, SettingsPage,OptionsPage,AppareilFormPage,AuthPage, NewViewPage],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AgmCoreModule.forRoot({apiKey: 'AIzaSyCSHAjpvQTwly3jUSXYvhbBP_-1WDHdMb8'}), AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule,
   IonicStorageModule.forRoot(),],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NavParams,
    AppareilsService,
    AuthService,
    NatureViewService,
    Geolocation,
    Camera,
    WebView,
    File
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
