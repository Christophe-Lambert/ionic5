import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppareilsPage } from '../pages/appareils/appareils';
import { TabsPage } from '../pages/tabs/tabs/tabs.page';
import { OptionsPage } from '../pages/options/options.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //appareilsPage = AppareilsPage;
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  @ViewChild('content') content: NavController;


  constructor(public navCtrl: NavController,private menuCtrl: MenuController) {}

  onGoToAppareils() {
    this.navCtrl.navigateForward('/page-appareils');
  }
  onNavigate(page: any) {
    console.log(page);
    this.content.navigateRoot(page);
    this.menuCtrl.close();
  }
}
