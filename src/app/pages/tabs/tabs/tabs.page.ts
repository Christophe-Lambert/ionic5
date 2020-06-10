import { Component, OnInit } from '@angular/core';
import { AppareilsPage } from '../../appareils/appareils';
import { SettingsPage } from '../../settings/settings/settings.page';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  appareilsPage = AppareilsPage;
  settingsPage = SettingsPage;
  mode: string;
  
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    console.log('TabsPage');
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
