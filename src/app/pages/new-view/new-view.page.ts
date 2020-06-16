import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { SetCoordinatesPage } from '../set-coordinates/set-coordinates.page';
import { OverlayEventDetail } from '@ionic/core'; 
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NatureView } from 'src/app/models/NatureView.model';
import { NatureViewService } from 'src/app/services/nature-view.service';
import { File, Entry } from '@ionic-native/file/ngx';

declare var cordova: any;

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.page.html',
  styleUrls: ['./new-view.page.scss'],
})
export class NewViewPage implements OnInit {

  natureViewForm: FormGroup;
  latitude: number;
  longitude: number;
  imageUrl: string;
  

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController, private toastCtrl: ToastController, 
    private camera: Camera, private webView: WebView, private natureViewService: NatureViewService, private navCtrl: NavController,
    private file: File) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.natureViewForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: [new Date().toISOString(), Validators.required],
      description: ['']
    });
  }

  async onOpenCoordsModal() {
    const modal = await this.modalCtrl.create({
      component: SetCoordinatesPage,
      componentProps: {latitude: this.latitude, longitude: this.longitude}
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.latitude = dataReturned.data.latitude;
        this.longitude = dataReturned.data.longitude;
        //alert('Modal Sent Data :'+ dataReturned.data.latitude);
      }
    });

    return await modal.present();

  }

  onTakePhoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }).then(
      (data) => {
        if (data) {
          const path = data.replace(/[^\/]*$/, '');
          const filename = data.replace(/^.*[\\\/]/, '');
          const targetDirectory = cordova.file.dataDirectory;
          this.file.moveFile(path, filename, targetDirectory, filename + new Date().getTime())
            .then(
              (data: Entry) => {
                this.imageUrl = this.webView.convertFileSrc(data.nativeURL);
                this.camera.cleanup();
              }
            )
            .catch(
              async (error) => {
                (await this.toastCtrl.create({
                  message: error,
                  duration: 3000,
                  position: 'bottom'
                })).present();
                this.camera.cleanup();
              }
            )
        }
      }
    ).catch(
      async (error) => {
        (await this.toastCtrl.create({
          message: error.message,
          duration: 3000,
          position: 'bottom'
        })).present();
      }
    )
  }

  onSubmitForm() {
    let newView = new NatureView(
      this.natureViewForm.get('name').value,
      new Date(),
      this.natureViewForm.get('description').value,
      this.latitude,
      this.longitude,
      this.imageUrl
    );
    this.natureViewService.addNatureView(newView);
    this.navCtrl.pop();
    //this.navCtrl.navigateForward('/home-nature-view');
    
  }

}
