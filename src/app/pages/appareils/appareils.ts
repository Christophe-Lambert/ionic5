import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, MenuController, ToastController, LoadingController } from '@ionic/angular';
import { SingleAppareilPage } from './single-appareil/single-appareil.page';
import { NavigationExtras } from '@angular/router';
import { Appareil } from 'src/app/models/appareil';
import { AppareilsService } from 'src/app/services/appareils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-appareils',
  templateUrl: './appareils.html',
  styleUrls: ['./appareils.scss'],
})
export class AppareilsPage implements OnInit {

  appareilsList: Appareil[];
  appaeilsSubscription: Subscription;
  log: any;

  constructor(private modalCtrl: ModalController,private appareilsService: AppareilsService, private menuCtrl: MenuController, private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {}

  ionViewWillEnter() {
    //this.appareilsList = this.appareilsService.appareilsList.slice();
  }

  async onLoadAppareil(index: number) {
    
    const modal = await this.modalCtrl.create({
      component: SingleAppareilPage,
      componentProps: { 
        index: index

      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.appaeilsSubscription = this.appareilsService.appareils$.subscribe(
      (appareils: Appareil[]) => {
        this.appareilsList = appareils.slice();
      }
    );
    this.appareilsService.emitAppareils();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNewAppareil() {
    this.navCtrl.navigateForward('/appareil-form');
  }

  ngOnDestroy() {
    this.appaeilsSubscription.unsubscribe();
  }

  async onSaveList() {
    let loader = await this.loadingCtrl.create({
      message: 'Sauvegarde en cours…'
    });
    await loader.present();

    this.appareilsService.saveData().then(
      async () => {
        loader.dismiss();
        let toast = await this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        });
        await toast.present();
      },
      async (error) => {
        loader.dismiss();
        let toast = await this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        });
        await toast.present();
      }
    );
  }

  async onFetchList() {
    let loader = await this.loadingCtrl.create({
      message: 'Récuperation en cours…'
    });
    loader.present();
    this.appareilsService.retrieveData().then(
      async () => {
        loader.dismiss();
        await (await this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position: 'bottom'
        })).present();
      },
      async (error) => {
        loader.dismiss();
        (await this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        })).present();
      }
    );
  }

  //onLoadAppareil(appareil: {name: string, description: string[]}) {

  //  let navigationExtras: NavigationExtras = {
  //    queryParams: {
  //      appareil: JSON.stringify(appareil)
  //    }
  //};

   // this.navCtrl.push(SingleAppareilPage, {appareilName: name});
  //  this.navCtrl.navigateForward(['/single-appareil'], navigationExtras);
  //}
}
