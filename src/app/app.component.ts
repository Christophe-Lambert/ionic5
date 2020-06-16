import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate : any;
  isAuth: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    console.log('initializeApp');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const firebaseConfig = {
        apiKey: "AIzaSyD359_9SsIL8QPlGP33kZCHN585wVsNBXI",
        authDomain: "ionic-chacon.firebaseapp.com",
        databaseURL: "https://ionic-chacon.firebaseio.com",
        projectId: "ionic-chacon",
        storageBucket: "ionic-chacon.appspot.com",
        messagingSenderId: "293449069167",
        appId: "1:293449069167:web:ddd5062641b96733b8d39a",
        measurementId: "G-BDVXWFWGJ5"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.sideMenu();
            //this.content.setRoot(TabsPage);
            this.navCtrl.navigateForward('/tabs');
          } else {
            this.isAuth = false;
            this.sideMenu();
            //this.content.setRoot(AuthPage, {mode: 'connect'});
          let navigationExtras: NavigationExtras = {
            queryParams: {mode: 'connect'}
          };
          this.navCtrl.navigateForward('/auth', navigationExtras);
          }
        }
      );      

    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.sideMenu(); 
  }


  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/tabs",
        icon  : "home",
        queryParams : "",
        show  : this.isAuth 
      },
      {
        title : "Options",
        url   : "/options",
        icon  : "construct-outline",
        queryParams : "",
        show  : this.isAuth 
      },   
      {
        title : "Home nature",
        url   : "/home-nature-view",
        icon  : "home",
        queryParams : "",
        show  : true 
      },         
      {
        title : "Nouvel utilisateur",
        url   : "/auth",
        icon  : "person-add",
        queryParams : {mode: 'new'},
        show  : !this.isAuth 
      },
      {
        title : "Connexion",
        url   : "/auth",
        icon  : "person",
        queryParams : {mode: 'connect'},
        show  : !this.isAuth 
      },
      {
        title : "Déconnexion",
        url   : "/auth",
        icon  : "exit",
        queryParams : {mode: 'disconnect'},
        show  : this.isAuth 
      }
    ]
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }

}
