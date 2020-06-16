import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-set-coordinates',
  templateUrl: './set-coordinates.page.html',
  styleUrls: ['./set-coordinates.page.scss'],
})
export class SetCoordinatesPage implements OnInit {

  latitude: number;
  longitude: number;
  marker: {
    latitude: number,
    longitude: number,
    draggable: true
  };

  constructor(private modalCtrl: ModalController, private geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {}

  ngOnInit() {
    console.log(`this.latitude:${this.latitude}`);
    if (this.latitude !== undefined) {
      //this.latitude = receivedLatitude;
      //this.longitude = receivedLongitude;
      this.marker = {
        latitude: this.latitude,
        longitude: this.longitude,
        draggable: true
      }
    } else {
      this.latitude = 57.28;
      this.longitude = -2.58;
    }

  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onMapClicked($event) {
    this.marker = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
      draggable: true
    };
  }

  onSave() {
    this.modalCtrl.dismiss({
      latitude: this.marker.latitude,
      longitude: this.marker.longitude
    });
  }

  async onLocateMe() {
    let loader = this.loadingCtrl.create({
      message: 'Recherche de votre position…'
    });
    (await loader).present();
    this.geolocation.getCurrentPosition().then(
      async (resp) => {
        (await loader).dismiss();
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.marker = {
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude,
          draggable: true
        }
      }).catch(
      async (error) => {
        (await loader).dismiss();
        (await this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'bottom'
          })).present();
      }
    );
  }

}
